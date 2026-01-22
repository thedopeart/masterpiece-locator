"use client";

interface CountryData {
  name: string;
  slug: string;
  totalArtworks: number;
  museumCount: number;
}

interface MobileCountrySelectProps {
  countries: CountryData[];
}

export default function MobileCountrySelect({ countries }: MobileCountrySelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const slug = e.target.value;
    if (slug) {
      const element = document.getElementById(slug);
      if (element) {
        const offsetTop = element.offsetTop - 16;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="lg:hidden mb-6">
      <label htmlFor="country-select" className="block text-sm font-medium text-neutral-700 mb-2">
        Jump to Country
      </label>
      <select
        id="country-select"
        onChange={handleChange}
        defaultValue=""
        className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white text-neutral-900 focus:ring-2 focus:ring-[#C9A84C] focus:border-[#C9A84C] outline-none"
      >
        <option value="" disabled>
          Select a country...
        </option>
        {countries.map((country) => (
          <option key={country.slug} value={country.slug}>
            {country.name} ({country.museumCount} museums)
          </option>
        ))}
      </select>
    </div>
  );
}
