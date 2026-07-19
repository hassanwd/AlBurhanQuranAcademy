"use client";

import { useEffect, useState } from "react";
import { DEFAULT_COURSES, type PublicCourse } from "@/lib/defaultCourses";

interface ApiCourse {
  title: string;
  slug: string;
  image?: string;
  description: string;
  status: "active" | "inactive";
}

// Returns the active courses from the database. While loading — and when the
// courses collection is empty (not seeded yet) or the API fails — it falls
// back to the built-in default courses so the public pages never render blank.
export function useCourses() {
  const [courses, setCourses] = useState<PublicCourse[]>(DEFAULT_COURSES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/courses")
      .then((r) => r.json())
      .then((d) => {
        const all: ApiCourse[] = Array.isArray(d.courses) ? d.courses : [];
        if (all.length > 0) {
          setCourses(
            all
              .filter((c) => c.status === "active")
              .map((c) => ({
                title: c.title,
                slug: c.slug,
                image: c.image ?? "",
                description: c.description,
              }))
          );
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { courses, loading };
}
