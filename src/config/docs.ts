import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "/docs/getting-started/",
		},
		{
			title: "Guides",
			href: "/guides",
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs/getting-started/",
				},
			],
		},
		{
			title: "Portfolio",
			items: [
				{
					title: "Introduction",
					href: "/docs/documentation",
				},
				{
					title: "Components",
					href: "/docs/documentation/components",
				},
				{
					title: "Configuration  Astro DB",
					href: "/docs/documentation/components",
					disabled: true,
				},
				{
					title: "Search (Fuse.js)",
					href: "/docs/in-progress",
					disabled: true,
				},
			],
		},
	],
};
