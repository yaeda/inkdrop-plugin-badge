type PluginData = {
  version: string;
  downloads: number;
};

export const getPluginData = async (name: string): Promise<PluginData> => {
  // TODO: handle timeout
  const response = await fetch(`https://api.inkdrop.app/v1/packages/${name}`);
  const json = await response.json();

  if (json.status === 404) {
    throw new Error("api returns 404");
  }

  return {
    version: json.metadata.version,
    downloads: json.downloads,
  };
};
