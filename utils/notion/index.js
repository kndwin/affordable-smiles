import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};

export const getUrlFromExternalUrl = ({ url }) => {
	const videoProvider = 
		/youtube/.test(url) ? 'youtube' :
		/vimeo/.test(url) ? 'vimeo' : "not_supported";
	if (videoProvider === "youtube") {
		const videoId = url.split("v=")[1].split("&")[0];
		return `https://www.youtube.com/embed/${videoId}`;
	} else if (videoProvider === "vimeo") {
		const videoId = url.split("/")[3];
		return `https://player.vimeo.com/video/${videoId}`;
	} else {
		return url;
	}
}
