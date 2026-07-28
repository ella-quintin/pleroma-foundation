export default {
    name: "resource",
    title: "Resources",
    type: "document",

    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required(),
        },

        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        },

        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Reports and Key Documents", value: "Reports and Key Documents" },
                    { title: "Publications", value: "Publications" },
                    { title: "Other Resources", value: "Other Resources" },
                ],
                layout: "radio",
            },
            validation: Rule => Rule.required(),
        },

        {
            name: "description",
            title: "Description",
            type: "text",
            rows: 4,
        },

        {
            name: "year",
            title: "Publication Year",
            type: "number",
            validation: Rule =>
                Rule.min(2000).max(new Date().getFullYear() + 1),
        },

        {
            name: "thumbnail",
            title: "Cover Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },

        {
            name: "file",
            title: "PDF File",
            type: "file",
            options: {
                accept: ".pdf",
            },
            validation: Rule => Rule.required(),
        },

        {
            name: "featured",
            title: "Featured Resource",
            type: "boolean",
            initialValue: false,
        },

        {
            name: "publishedAt",
            title: "Published Date",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        },
    ],

    preview: {
        select: {
            title: "title",
            subtitle: "category",
            media: "thumbnail",
        },
    },
};