import { NextApiRequest, NextApiResponse } from "next";
import { getPluginData } from "../../../lib/plugin";
import { getBadge } from "../../../lib/badge";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { name, style },
  } = req;

  try {
    const data = await getPluginData(name as string);
    const badge = getBadge({
      label: "Inkdrop Plugin",
      message: `v${data.version}`,
      style: Array.isArray(style) ? style[0] : style,
    });

    res.status(200);
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-maxage=600, stale-white-revalidate");
    res.end(badge);
  } catch (error) {
    res.status(404).json({ message: `package '${name}': not found.` });
  }
};
