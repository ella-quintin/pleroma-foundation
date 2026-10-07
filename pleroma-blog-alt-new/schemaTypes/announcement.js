export default {
  name: 'announcement',
  title: 'Announcement Banner',
  type: 'document',
  fields: [
    {
      name: 'isActive',
      title: 'Show on Site',
      type: 'boolean',
      description:
        'Turn on to display this announcement in the banner above the main menu, on every page. Only one announcement should be active at a time — if more than one is turned on, the most recently updated one wins.',
      initialValue: false,
    },

    {
      name: 'message',
      title: 'Message',
      type: 'string',
      description:
        'The announcement text shown in the banner, e.g. "Young Authors\' Circle launches 4 December 2026 in Gbegbeyise."',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      description:
        'Optional. Text for the banner\'s call-to-action, e.g. "Read the Story". Leave empty to show the message with no button.',
    },

    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description:
        'Where the button should go. Use a path on this site (e.g. /blog/help-young-voices-in-gbegbeyise-be-heard2) or a full https:// URL for an external link.',
    },
  ],
  preview: {
    select: { title: 'message', active: 'isActive' },
    prepare({ title, active }) {
      return {
        title: title || 'Untitled announcement',
        subtitle: active ? 'Active — showing on site' : 'Inactive',
      };
    },
  },
};
