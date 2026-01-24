"use client";

import { useState, useEffect, useCallback } from "react";

type Submission = {
  id: string;
  name: string;
  email: string;
  website: string | null;
  instagram: string | null;
  artStyle: string;
  bio: string;
  sampleUrls: string[];
  message: string | null;
  status: string;
  adminNotes: string | null;
  createdAt: string;
};

type FilterStatus = "all" | "pending" | "approved" | "rejected";

export default function AdminSubmissions() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<FilterStatus>("pending");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async (pwd: string) => {
    setLoading(true);
    setError("");

    try {
      const statusParam = filter === "all" ? "" : `?status=${filter}`;
      const response = await fetch(`/api/submissions${statusParam}`, {
        headers: { Authorization: `Bearer ${pwd}` },
      });

      if (!response.ok) {
        if (response.status === 401) {
          setIsAuthenticated(false);
          sessionStorage.removeItem("admin_pwd");
          throw new Error("Invalid password");
        }
        throw new Error("Failed to fetch submissions");
      }

      const data = await response.json();
      setSubmissions(data.submissions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    const savedPwd = sessionStorage.getItem("admin_pwd");
    if (savedPwd) {
      setPassword(savedPwd);
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && password) {
      fetchSubmissions(password);
    }
  }, [isAuthenticated, password, filter, fetchSubmissions]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("admin_pwd", password);
    setIsAuthenticated(true);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch("/api/submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!response.ok) throw new Error("Failed to update");

      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
      );
    } catch (err) {
      alert("Failed to update status");
    }
  };

  const updateNotes = async (id: string, notes: string) => {
    try {
      await fetch("/api/submissions", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify({ id, adminNotes: notes }),
      });
    } catch (err) {
      console.error("Failed to save notes");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h1 className="text-xl font-bold mb-4">Admin Login</h1>
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-3 py-2 border border-neutral-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
          />
          <button
            type="submit"
            className="w-full bg-[#C9A84C] text-white py-2 rounded-lg hover:bg-[#b8993f]"
          >
            Login
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Artist Submissions</h1>
          <button
            onClick={() => {
              sessionStorage.removeItem("admin_pwd");
              setIsAuthenticated(false);
              setPassword("");
            }}
            className="text-sm text-neutral-500 hover:text-neutral-700"
          >
            Logout
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          {(["pending", "approved", "rejected", "all"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === s
                  ? "bg-[#C9A84C] text-white"
                  : "bg-white text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12 text-neutral-500">Loading...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">{error}</div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-12 text-neutral-500">
            No {filter === "all" ? "" : filter} submissions
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((sub) => (
              <div key={sub.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div
                  className="p-4 cursor-pointer hover:bg-neutral-50"
                  onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-lg">{sub.name}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            sub.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : sub.status === "approved"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {sub.status}
                        </span>
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        {sub.artStyle} • {sub.email}
                      </div>
                    </div>
                    <div className="text-sm text-neutral-400">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {expandedId === sub.id && (
                  <div className="border-t border-neutral-100 p-4 bg-neutral-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-medium text-neutral-500 uppercase mb-1">
                          Bio
                        </h4>
                        <p className="text-sm">{sub.bio}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-medium text-neutral-500 uppercase mb-1">
                          Links
                        </h4>
                        <div className="text-sm space-y-1">
                          {sub.website && (
                            <div>
                              <a
                                href={sub.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#C9A84C] hover:underline"
                              >
                                {sub.website}
                              </a>
                            </div>
                          )}
                          {sub.instagram && (
                            <div>
                              <a
                                href={`https://instagram.com/${sub.instagram.replace("@", "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#C9A84C] hover:underline"
                              >
                                {sub.instagram}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-neutral-500 uppercase mb-2">
                        Sample Work
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sub.sampleUrls.map((url, i) => (
                          <a
                            key={i}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-white px-3 py-2 rounded border hover:border-[#C9A84C] transition-colors truncate max-w-xs"
                          >
                            {url}
                          </a>
                        ))}
                      </div>
                    </div>

                    {sub.message && (
                      <div className="mb-4">
                        <h4 className="text-xs font-medium text-neutral-500 uppercase mb-1">
                          Message
                        </h4>
                        <p className="text-sm">{sub.message}</p>
                      </div>
                    )}

                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-neutral-500 uppercase mb-1">
                        Admin Notes
                      </h4>
                      <textarea
                        defaultValue={sub.adminNotes || ""}
                        onBlur={(e) => updateNotes(sub.id, e.target.value)}
                        placeholder="Add private notes..."
                        className="w-full px-3 py-2 text-sm border border-neutral-200 rounded resize-none"
                        rows={2}
                      />
                    </div>

                    <div className="flex gap-2">
                      {sub.status !== "approved" && (
                        <button
                          onClick={() => updateStatus(sub.id, "approved")}
                          className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                        >
                          Approve
                        </button>
                      )}
                      {sub.status !== "rejected" && (
                        <button
                          onClick={() => updateStatus(sub.id, "rejected")}
                          className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      )}
                      {sub.status !== "pending" && (
                        <button
                          onClick={() => updateStatus(sub.id, "pending")}
                          className="px-4 py-2 bg-neutral-200 text-neutral-700 text-sm rounded hover:bg-neutral-300"
                        >
                          Reset to Pending
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
