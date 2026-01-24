import { Metadata } from "next";
import AdminSubmissions from "./AdminSubmissions";

export const metadata: Metadata = {
  title: "Artist Submissions | Admin",
  robots: "noindex, nofollow",
};

export default function AdminSubmissionsPage() {
  return <AdminSubmissions />;
}
