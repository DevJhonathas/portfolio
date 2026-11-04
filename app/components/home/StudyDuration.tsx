"use client";

import { useEffect, useState } from "react";
import { profile } from "@/app/data/profile";

function calculateDuration(startDate: string) {
  const [year, month, day] = startDate.split("-").map(Number);

  if (!year || !month || !day) {
    return "Configure a data de início";
  }

  const start = new Date(year, month - 1, day);
  const now = new Date();

  if (
    Number.isNaN(start.getTime()) ||
    start.getFullYear() !== year ||
    start.getMonth() !== month - 1 ||
    start.getDate() !== day ||
    start > now
  ) {
    return "Data inválida";
  }

  let totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (now.getDate() < start.getDate()) {
    totalMonths--;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0 && months === 0) {
    return "Menos de um mês";
  }

  const result = [];

  if (years > 0) {
    result.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  }

  if (months > 0) {
    result.push(`${months} ${months === 1 ? "mês" : "meses"}`);
  }

  return result.join(" e ");
}

export function StudyDuration() {
  const [duration, setDuration] = useState("Calculando...");

  useEffect(() => {
    const updateDuration = () => {
      setDuration(calculateDuration(profile.studyStartDate));
    };

    updateDuration();

    const interval = window.setInterval(
      updateDuration,
      1000 * 60 * 60 * 24
    );

    return () => window.clearInterval(interval);
  }, []);

  return <>{duration}</>;
}