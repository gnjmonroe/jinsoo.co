import { NextApiRequest, NextApiResponse } from "next";
import type { Project, ResponseError } from "@/data/projects";
import projects from "@/data/projects";

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Project | ResponseError>
) {
  const { query } = req;
  const { slug } = query;
  const project = projects.find((proj) => proj.slug === slug);

  // User with id exists
  return project
    ? res.status(200).json(project)
    : res
      .status(404)
      .json({ message: `Project with slug: ${slug} not found.` });
}
