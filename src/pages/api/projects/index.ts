import { NextApiResponse, NextApiRequest } from 'next';
import projects, { Project } from '@/data/projects';

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Project[]>
) {
	return res.status(200).json(projects);
}
