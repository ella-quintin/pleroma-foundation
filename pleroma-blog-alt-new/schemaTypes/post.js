export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'story',
      options: {
        list: [
          { title: 'Story', value: 'story' },
          { title: 'Impact', value: 'impact' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    },

    {
      name: 'featured',
      title: "Feature on What's New",
      type: 'boolean',
      description:
        "Pin this post to the top of the What's New page, overriding the default (most recently published) post. Turn off to let the most recent post take over again.",
      initialValue: false,
    },

    {
      name: 'showDonateButton',
      title: 'Show Donate Button',
      type: 'boolean',
      description:
        'Display a "Donate to Support This Story" button on this post, for stories tied to a specific need or appeal.',
      initialValue: false,
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },

    {
      name: 'excerpt',
      title: 'SEO Excerpt / Summary',
      type: 'text',
      rows: 3,
      description:
        'Short summary used for search engines and previews (150–160 characters)',
    },

    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },

    {
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};