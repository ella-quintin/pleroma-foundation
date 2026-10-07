import { Briefcase, Heart, GraduationCap, Baby, Users } from "lucide-react";
import womanSelling from "../assets/images/womanSelling.jpg";
import helping from "../assets/images/helping.jpg";
import study from "../assets/images/study.jpg";
import children from "../assets/images/children.jpg";
import bible from "../assets/images/bible.jpg";

export const programs = [
  {
    id: 1,
    slug: "sow-grow-initiative",
    title: "Sow & Grow Initiative",
    tagline: "Growing in faith, building character and preparing for purposeful futures",
    icon: Briefcase,
    image: womanSelling,
    intro: [
      "Young people have ideas, abilities and aspirations that need room to grow. Alongside opportunities to learn, they need trusted guidance, practical experience and a strong foundation of values to help them navigate the transition into adulthood.",
      "The Sow & Grow Initiative is Pleroma Sycamore Foundation's programme for adolescents and young people. It brings together Christian discipleship, character development, life skills and entrepreneurship to help participants discover their strengths and take purposeful steps towards their future.",
      "Through mentorship, peer learning and practical application, the initiative seeks to equip young people to make responsible decisions, build positive relationships and contribute meaningfully wherever they find themselves.",
    ],
    purpose: [
      "Sow & Grow exists to help young people develop both the character and capabilities needed for adult life. We want participants to understand their worth, recognise their responsibilities and gain the confidence to put their abilities to use.",
      "The initiative connects personal and spiritual growth with practical preparation for leadership, work and enterprise. Its three complementary focus areas offer opportunities to deepen faith, develop dependable habits and turn ideas into action.",
    ],
    focusAreas: [
      {
        name: "Youth for Jesus Clubs",
        tagline: "Growing in faith and learning to lead",
        paragraphs: [
          "Faith can provide young people with a foundation for understanding who they are, what they value and how they relate to others. Youth for Jesus Clubs create safe, values-based spaces for Christian discipleship, mentorship, peer learning and youth leadership.",
          "The clubs seek to build a sense of belonging where young people can explore questions, learn from trusted mentors and encourage one another. They connect Christian teaching with everyday experiences, helping participants consider how their faith shapes their choices and responsibilities.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Christian discipleship", text: "Deepening understanding of Christian faith and encouraging its application in everyday life." },
          { label: "Mentorship and guidance", text: "Supporting young people as they explore their strengths, consider their goals and navigate personal decisions." },
          { label: "Positive peer relationships", text: "Encouraging friendships built on respect, accountability and mutual support." },
          { label: "Life skills and responsible choices", text: "Developing communication, self-awareness and sound judgement in relationships and daily responsibilities." },
          { label: "Youth leadership and service", text: "Encouraging participants to take initiative, work with others and contribute to their churches and communities." },
        ],
        closing: "Through these areas, Youth for Jesus Clubs aim to nurture young people whose faith is reflected in their character, relationships and willingness to serve.",
      },
      {
        name: "DICE Academy",
        tagline: "Developing Christian Character",
        paragraphs: [
          "Personal ambition needs a foundation of consistent effort, sound values and the ability to follow through. DICE Academy helps young people strengthen this foundation through four connected qualities: Discipline, Integrity, Competence and Excellence.",
          "The Academy brings character development into practical learning. It encourages participants to reflect on their habits, take responsibility for their choices and apply what they learn to education, work, leadership and everyday life.",
        ],
        bulletsIntro: "The four pillars of DICE are:",
        bullets: [
          { label: "Discipline", text: "Developing the habits needed to set goals, manage time, remain consistent and fulfil commitments. This includes learning to persevere when progress requires patience and effort." },
          { label: "Integrity", text: "Encouraging honesty, accountability and consistency between values and actions. Participants are guided to consider how their decisions affect others and why trust matters." },
          { label: "Competence", text: "Building the knowledge, skills and confidence needed to carry out responsibilities effectively. The emphasis is on learning, practising, receiving feedback and recognising where further development is needed." },
          { label: "Excellence", text: "Encouraging care, preparation and a commitment to improvement. Excellence means making a thoughtful effort, learning from mistakes and taking pride in doing work well." },
        ],
        closing: "Through structured learning and practical application, DICE Academy seeks to help young people become dependable, capable and guided by strong values. These qualities support their growth as learners, colleagues, entrepreneurs and community leaders.",
      },
      {
        name: "Believe • Start • Achieve Challenge",
        tagline: "Turning ideas into practical action",
        paragraphs: [
          "Many young people have ideas but need encouragement and guidance to take the first step. The Believe • Start • Achieve Challenge supports participants to explore entrepreneurship, develop solutions and learn what it takes to move an idea forward.",
          "Through coaching, innovation challenges and enterprise exposure, the initiative connects creativity with practical thinking. It encourages young people to recognise needs around them, consider how they might respond and develop the confidence to test and improve their ideas.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Recognising opportunities", text: "Identifying everyday problems, unmet needs and possibilities for creating value within communities." },
          { label: "Developing ideas", text: "Helping participants clarify what they want to offer, who it could serve and why it would be useful." },
          { label: "Entrepreneurial thinking", text: "Encouraging initiative, resourcefulness, problem-solving and a willingness to learn through experience." },
          { label: "Coaching and enterprise exposure", text: "Creating opportunities to learn from people with practical business experience and understand the realities of starting and running an enterprise." },
          { label: "Taking action and learning", text: "Encouraging manageable first steps, reflection on feedback and improvements as ideas develop." },
          { label: "Communicating ideas", text: "Building confidence in explaining a proposed solution and the value it could bring to others." },
        ],
        closing: "The challenge aims to help young people move from uncertainty towards informed action. Progress includes developing a clearer idea, gaining practical experience and building the persistence to keep learning.",
      },
    ],
    whoServes: [
      "Sow & Grow is designed for adolescents and young people who are developing their identity, preparing for greater responsibility or exploring their future direction.",
      "It is relevant to young people seeking stronger foundations in faith and character, opportunities for mentorship and leadership, or guidance in exploring entrepreneurship. Its different focus areas allow support to respond to participants' stage of development and interests.",
    ],
    howWeWork: [
      "Our approach combines values-based learning with relationships and opportunities to practise. Mentors provide guidance, peers learn from one another, and practical activities help participants connect learning with real responsibilities.",
      "Partnerships with churches, families, communities, volunteers and institutions support this work. These relationships help create environments where young people can receive encouragement, develop their abilities and contribute through service.",
    ],
    changeWeSeek: {
      intro: "Through Sow & Grow, we aim to support young people to:",
      bullets: [
        "Demonstrate Christian character and make thoughtful, responsible decisions.",
        "Build confidence, self-awareness and positive relationships.",
        "Develop habits that support learning, work and personal responsibility.",
        "Take initiative and apply practical problem-solving skills.",
        "Explore enterprise ideas with greater understanding and confidence.",
        "Lead and serve with integrity, competence and compassion.",
      ],
      closing: "Our goal is for young people to leave each learning experience better prepared to take their next step and use their abilities constructively.",
    },
    getInvolved: {
      heading: "Help young people grow",
      paragraphs: [
        "Your support can create opportunities for young people to learn, receive guidance and gain practical experience.",
        "You can contribute as a mentor, trainer or enterprise partner, share professional knowledge, support programme resources or help connect young people with relevant learning opportunities.",
      ],
      closing: "Partner with Pleroma Sycamore Foundation to help young people grow in character, develop their capabilities and pursue purposeful futures.",
    },
  },
  {
    id: 2,
    slug: "golden-years-initiative",
    title: "Golden Years Initiative",
    tagline: "Supporting dignity, wellbeing and connection in later life",
    icon: Heart,
    image: helping,
    intro: [
      "Growing older should come with the opportunity to live safely, maintain meaningful relationships and remain a valued part of community life. Older persons bring experience, knowledge and perspectives that enrich the people around them. They also deserve responsive support as their circumstances and needs change.",
      "The Golden Years Initiative is Pleroma Sycamore Foundation's programme for older persons. It brings together compassionate outreach, support for safer living conditions and opportunities for continued participation through mentorship and service.",
      "The initiative recognises each older person as an individual with preferences, abilities and a story of their own. Our approach places dignity and respect at the centre of care, while strengthening connections between older persons, families and communities.",
    ],
    purpose: [
      "Golden Years exists to promote the wellbeing, inclusion and meaningful participation of older persons. We seek to address practical needs while creating opportunities for companionship, belonging and contribution.",
      "The initiative connects three complementary areas of support: personal wellbeing, safer living and the sharing of experience across generations. Together, these areas help communities respond more thoughtfully to ageing and recognise the continuing value of older people.",
    ],
    focusAreas: [
      {
        name: "Senior Wellbeing & Compassion Outreach",
        tagline: "Care through companionship and practical support",
        paragraphs: [
          "Regular contact and thoughtful assistance can make a meaningful difference to an older person's everyday life. Senior Wellbeing & Compassion Outreach provides companionship, wellbeing checks and basic welfare support, alongside links to appropriate health, social and community services.",
          "The outreach begins with listening. Understanding an individual's circumstances helps identify what support may be useful, what they can manage independently and where further assistance may be needed.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Companionship and social connection", text: "Creating opportunities for conversation and meaningful contact, particularly for older persons who experience isolation or have limited support networks." },
          { label: "Wellbeing checks", text: "Paying attention to everyday needs and changes in circumstances that may require practical assistance or referral." },
          { label: "Basic welfare support", text: "Mobilising targeted help for essential needs, guided by individual circumstances and available resources." },
          { label: "Connections to appropriate services", text: "Helping older persons connect with health, social and community services relevant to their needs." },
          { label: "Stronger community support", text: "Encouraging families, volunteers and local partners to play a constructive role in the wellbeing of older persons, with respect for their wishes and independence." },
        ],
        closing: "Through this outreach, we seek to help older persons feel heard, maintain supportive relationships and access assistance appropriate to their circumstances.",
      },
      {
        name: "Shelter & Safe-Living Support",
        tagline: "Promoting safety, comfort and dignity at home",
        paragraphs: [
          "Living conditions can affect an older person's safety, independence and wellbeing. Some may need assistance with accommodation, household needs or changes that make their surroundings more suitable for daily life.",
          "Shelter & Safe-Living Support mobilises assistance for older persons facing these challenges. It focuses on understanding practical needs and connecting people with resources and partners who may be able to help.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Safe accommodation needs", text: "Identifying circumstances in which an older person needs support to access or maintain suitable accommodation." },
          { label: "Improved living conditions", text: "Mobilising assistance to address household conditions that affect safety, comfort and dignity." },
          { label: "Practical household support", text: "Connecting older persons with help for essential household needs that have become difficult to manage." },
          { label: "Independence in daily living", text: "Considering how support can help older persons continue managing everyday activities with confidence and appropriate assistance." },
          { label: "Coordinated assistance", text: "Working with families, community members and relevant partners to identify feasible responses to each person's situation." },
        ],
        closing: "Support is guided by identified needs and available resources. The aim is to help older persons live in more secure and supportive surroundings, with their preferences informing decisions that affect them.",
      },
      {
        name: "Elder Wisdom & Mentorship Network",
        tagline: "Connecting generations through experience and shared learning",
        paragraphs: [
          "Older persons have knowledge and skills that can guide younger generations and strengthen community life. The Elder Wisdom & Mentorship Network creates opportunities for them to contribute through mentoring, storytelling, volunteering and service.",
          "Participation recognises the interests, abilities and willingness of each person. It gives older persons space to share what they know while encouraging younger people to listen, learn and build relationships across generations.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Mentorship", text: "Connecting older persons with opportunities to offer guidance drawn from their personal, professional and community experience." },
          { label: "Storytelling and shared history", text: "Creating space for life stories, cultural knowledge and community memories to be passed on." },
          { label: "Skills and experience sharing", text: "Encouraging older persons to share useful knowledge and practical abilities with others." },
          { label: "Volunteering and community service", text: "Supporting meaningful opportunities to contribute in ways that suit individual interests and capacities." },
          { label: "Intergenerational relationships", text: "Encouraging mutual respect, conversation and learning between older and younger people." },
        ],
        closing: "Through the network, we seek to strengthen belonging and recognise older persons as active contributors to the present and future of their communities.",
      },
    ],
    whoServes: [
      "Golden Years serves older persons with different needs, abilities and circumstances. This includes those who would benefit from companionship, basic welfare assistance, links to services or support with their living conditions.",
      "It also welcomes older persons who wish to share their experience, mentor others or contribute through volunteering. The initiative recognises that receiving support and contributing to community life can go hand in hand.",
    ],
    howWeWork: [
      "Our approach begins with listening to older persons and respecting their choices. We seek to understand individual circumstances and coordinate appropriate support through families, churches, communities, volunteers and relevant service providers.",
      "Practical assistance is combined with relationship-building and opportunities for participation. Where needs require specialist attention, connections to appropriate services form an important part of the response.",
    ],
    changeWeSeek: {
      intro: "Through Golden Years, we aim to help older persons:",
      bullets: [
        "Maintain meaningful relationships and a stronger sense of belonging.",
        "Access practical support and appropriate services.",
        "Experience safer and more comfortable living conditions.",
        "Retain choice and independence in their daily lives.",
        "Share their knowledge and participate in community life.",
      ],
      closing: "We also seek to strengthen understanding between generations and encourage communities to take an active role in supporting dignity in later life.",
    },
    getInvolved: {
      heading: "Support dignity in later life",
      paragraphs: [
        "Your time, expertise and resources can help strengthen the care and opportunities available to older persons.",
        "You can contribute through companionship, practical household assistance, professional services or support for outreach activities. Organisations and community groups can also partner with us to improve living conditions and create opportunities for intergenerational learning.",
      ],
      closing: "Partner with Pleroma Sycamore Foundation to help older persons remain connected, supported and valued.",
    },
  },
  {
    id: 3,
    slug: "bridges-to-brilliance-programme",
    title: "Bridges to Brilliance Programme",
    tagline: "Helping learners access education, develop skills and pursue their potential",
    icon: GraduationCap,
    image: study,
    intro: [
      "Every learner deserves an opportunity to develop their abilities. For some, however, the cost of education, limited access to training or a lack of practical resources can interrupt that journey. Encouragement matters, but progress often also depends on timely, targeted support.",
      "The Bridges to Brilliance Programme is Pleroma Sycamore Foundation's programme for educational opportunity and skills development. It seeks to remove financial and opportunity barriers that prevent promising learners and young people from accessing education, developing relevant capabilities and preparing for productive livelihoods.",
      "Through the Professor E. V. Doku Education Fund and the Skills for Success Fund, the programme supports different routes to personal and professional growth. These include formal education, vocational and technical training, digital learning, apprenticeships and professional certification.",
    ],
    purpose: [
      "Bridges to Brilliance exists to connect potential with opportunity. We seek to help learners continue their education and support emerging talent in acquiring the skills and resources needed to move forward.",
      "The programme recognises that people follow different paths towards meaningful work and greater independence. Some need assistance to remain in school or pursue further study. Others need access to practical training, tools or mentorship to prepare for a trade, profession or enterprise.",
      "Our two funds respond to these different needs within a shared commitment to learning, dignity and opportunity.",
    ],
    focusAreas: [
      {
        name: "Professor E. V. Doku Education Fund",
        tagline: "Supporting educational access and continued learning",
        paragraphs: [
          "Financial challenges can affect a learner's ability to enrol, remain in school or progress to the next stage of education. The Professor E. V. Doku Education Fund provides scholarships and targeted educational assistance from basic through secondary and tertiary levels, based on need and potential.",
          "The fund seeks to help learners whose circumstances may limit their educational opportunities. By addressing identified barriers, it aims to give recipients a stronger chance to continue learning and develop their abilities.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Access to education", text: "Supporting learners who face financial barriers to entering or continuing formal education." },
          { label: "Basic and secondary education", text: "Providing targeted assistance that helps learners build their educational foundations and progress through school." },
          { label: "Tertiary education", text: "Supporting opportunities for further study and the development of knowledge and qualifications relevant to future aspirations." },
          { label: "Continuity of learning", text: "Helping address financial pressures that may disrupt a learner's educational journey." },
          { label: "Support guided by need and potential", text: "Considering both the challenges a learner faces and their capacity to benefit from educational assistance." },
        ],
        closing: "The fund's purpose extends beyond access alone. It seeks to give learners the opportunity to make sustained progress, build confidence in their abilities and prepare for the responsibilities and possibilities ahead.",
      },
      {
        name: "Skills for Success Fund",
        tagline: "Building practical capabilities for work and enterprise",
        paragraphs: [
          "Training can open opportunities for employment and self-employment, but the cost of learning is only one of the challenges participants may face. Applying a new skill can also require tools, practical experience, guidance or recognised certification.",
          "The Skills for Success Fund supports vocational, technical and digital training, alongside professional certification and apprenticeships. Its scope includes tools, mentorship and selected start-up assistance to help participants move from learning towards practical application.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Vocational and technical training", text: "Supporting access to practical learning that develops competence in a trade or technical field." },
          { label: "Digital skills development", text: "Helping participants access training that strengthens their ability to use digital tools and pursue relevant opportunities." },
          { label: "Professional certification", text: "Supporting pathways to recognised qualifications that can strengthen professional competence and employment prospects." },
          { label: "Apprenticeships", text: "Enabling opportunities to learn through practical experience alongside skilled practitioners." },
          { label: "Tools and practical resources", text: "Supporting access to selected equipment or materials needed to practise and apply acquired skills." },
          { label: "Mentorship", text: "Connecting participants with guidance as they develop their capabilities and consider their next steps." },
          { label: "Selected start-up assistance", text: "Providing targeted support, where appropriate, to help participants begin applying their skills through self-employment or small enterprise." },
        ],
        closing: "Through these areas, the fund seeks to make skills development more accessible and useful in practice. Its aim is to help participants build competence, understand their options and become better prepared to pursue a livelihood.",
      },
    ],
    whoServes: [
      "Bridges to Brilliance serves learners and emerging talent who face financial or opportunity barriers to education and skills development.",
      "This includes learners at basic, secondary and tertiary levels, as well as young people pursuing vocational, technical, digital or professional training. It also includes those who need practical support to apply newly acquired skills.",
      "The appropriate form of assistance depends on the individual's circumstances, the focus of the relevant fund and available resources.",
    ],
    howWeWork: [
      "Our approach connects identified needs with appropriate educational or practical support. We recognise that meaningful assistance should respond to the learner's stage of development and the particular barrier affecting their progress.",
      "Partnerships with educational institutions, training providers, skilled practitioners, employers and donors can strengthen this work. Such relationships help connect financial assistance with learning opportunities, practical experience and guidance.",
      "The two funds complement one another by supporting both formal education and practical routes to work. Together, they create a broader range of opportunities for learners with different abilities and aspirations.",
    ],
    changeWeSeek: {
      intro: "Through Bridges to Brilliance, we aim to help participants:",
      bullets: [
        "Access education and training that might otherwise be out of reach.",
        "Continue learning with fewer financial barriers.",
        "Gain relevant knowledge, practical skills and qualifications.",
        "Build confidence in their abilities and future direction.",
        "Apply their learning in employment, self-employment or further study.",
        "Move towards greater independence and meaningful contribution to their communities.",
      ],
      closing: "These are the outcomes the programme works towards, recognising that each participant's progress will reflect their circumstances and chosen pathway.",
    },
    getInvolved: {
      heading: "Help someone take the next step",
      paragraphs: [
        "Your support can help a learner continue their education, access practical training or obtain resources needed to apply a skill.",
        "Individuals and organisations can contribute to the education and skills funds, offer mentorship, provide tools or create apprenticeship and training opportunities. Educational institutions and employers can also partner with us to expand access to relevant learning experiences.",
        "For enquiries about support or partnership opportunities, contact Pleroma Sycamore Foundation.",
      ],
      closing: "Help turn a learner's potential into an opportunity to progress.",
    },
  },
  {
    id: 4,
    slug: "rooted-rising-initiative",
    title: "The Rooted & Rising Initiative",
    tagline: "Helping children grow in faith, confidence and creativity",
    icon: Baby,
    image: children,
    intro: [
      "Childhood is a time of discovery. As children learn, build relationships and explore their abilities, they begin to form an understanding of themselves and their place in the world. Supportive relationships, opportunities to express themselves and care for their everyday needs help establish foundations they can build on throughout life.",
      "The Rooted & Rising Initiative is Pleroma Sycamore Foundation's programme for children. It brings together Christian faith formation, literacy, creativity, early talent development and practical welfare support.",
      "Through its four focus areas, the initiative seeks to help children develop strong spiritual, intellectual and social foundations. We want children to feel valued, become confident learners and recognise that their ideas and contributions matter.",
    ],
    purpose: [
      "Rooted & Rising exists to help children grow with confidence, purpose and hope. It connects learning and personal development with the care children need to participate meaningfully.",
      "The initiative recognises that children's development is influenced by their relationships and circumstances. Working through families, churches, schools and communities, we seek to create opportunities that nurture their abilities while responding to needs that may affect their wellbeing.",
    ],
    focusAreas: [
      {
        name: "Children for Jesus Clubs",
        tagline: "Growing in faith, character and belonging",
        paragraphs: [
          "Children for Jesus Clubs provide faith-based spaces where children can learn about Christian values, develop positive relationships and experience a sense of belonging.",
          "The clubs connect faith with everyday life, helping children understand how kindness, honesty, compassion and responsibility influence the way they treat themselves and others. They encourage learning and participation in ways that respond to children's stages of development.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Christian faith formation", text: "Helping children explore Christian beliefs and understand how faith can guide their everyday choices." },
          { label: "Character development", text: "Encouraging honesty, kindness, patience, respect and responsibility through learning and practical application." },
          { label: "Positive peer relationships", text: "Supporting children to build friendships, cooperate with others and respond to differences with care." },
          { label: "Belonging and participation", text: "Creating welcoming opportunities for children to ask questions, share ideas and take part." },
          { label: "Compassion and service", text: "Helping children recognise the needs of others and discover simple, meaningful ways to contribute at home, in school and within their communities." },
        ],
        closing: "Through these areas, Children for Jesus Clubs seek to nurture children whose growing faith is reflected in their character and relationships.",
      },
      {
        name: "Young Authors Circle",
        tagline: "Every Child Has a Story",
        paragraphs: [
          "Young Authors Circle helps children develop their reading, writing and communication skills while discovering the value of their ideas and experiences. It responds to the need for opportunities where children can explore books, use their imagination and receive encouragement to express themselves.",
          "The initiative combines reading, storytelling and creative writing to make literacy engaging and meaningful. Children are encouraged to draw inspiration from their everyday lives, cultural heritage and communities, recognising that they have stories worth sharing.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Reading and comprehension", text: "Encouraging children to explore books, discuss what they read and strengthen their vocabulary and understanding." },
          { label: "Creative writing", text: "Supporting children to develop ideas, organise their thoughts and express themselves through stories, poems and essays." },
          { label: "Storytelling and confident expression", text: "Creating opportunities for children to share their work, listen to others and become more comfortable communicating their ideas." },
          { label: "Community awareness", text: "Encouraging children to reflect on the world around them, including issues such as sanitation and care for the environment, and imagine positive change." },
          { label: "Encouragement and constructive feedback", text: "Helping children improve their writing while recognising their effort, creativity and progress." },
        ],
        closing: "Young Authors Circle seeks to strengthen literacy and help children see themselves as capable readers, writers and contributors to their communities.",
      },
      {
        name: "The Innovation Nest",
        tagline: "Nurturing Young Talent",
        paragraphs: [
          "Children discover their interests by exploring, asking questions and trying things for themselves. The Innovation Nest provides practical opportunities for children to develop creativity, engage with technology and build problem-solving skills.",
          "It encourages curiosity and gives children room to explore emerging talents. The emphasis is on learning through discovery, recognising that experimentation and mistakes can be useful parts of the learning process.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Creative exploration", text: "Encouraging children to express ideas and explore different ways of making, designing and creating." },
          { label: "Problem-solving", text: "Helping children observe everyday challenges, ask questions and consider possible solutions." },
          { label: "Technology exploration", text: "Providing opportunities to build understanding of technology and discover how it can support learning and creativity." },
          { label: "Early talent development", text: "Helping children recognise their interests and strengths through exposure to practical learning experiences." },
          { label: "Collaboration and shared learning", text: "Encouraging children to exchange ideas, work together and appreciate different approaches." },
          { label: "Confidence through experimentation", text: "Supporting a willingness to try, learn from feedback and improve an idea over time." },
        ],
        closing: "Through the Innovation Nest, we seek to help children become more curious, resourceful and confident in their ability to learn and create.",
      },
      {
        name: "Compassion Table",
        tagline: "Practical care that supports learning and wellbeing",
        paragraphs: [
          "Children's ability to learn and participate is closely connected to their everyday wellbeing. Difficulties with nutrition, learning resources or family welfare can affect their opportunities to grow.",
          "Compassion Table provides targeted nutrition, learning and welfare support for vulnerable children and families, with links to appropriate referral services. It seeks to respond to identified needs while recognising the importance of the family environment in a child's development.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Nutrition support", text: "Mobilising targeted assistance to help address identified nutrition needs among vulnerable children and families." },
          { label: "Learning support", text: "Helping address practical barriers that affect a child's access to learning resources and participation." },
          { label: "Basic welfare assistance", text: "Responding to essential needs that influence children's wellbeing and their ability to benefit from developmental opportunities." },
          { label: "Family connection", text: "Engaging with families to better understand children's circumstances and the support that may be useful." },
          { label: "Appropriate referrals", text: "Connecting children and families with relevant services when their needs require additional or specialised assistance." },
        ],
        closing: "Support is guided by identified needs and available resources. Through Compassion Table, we aim to connect immediate care with opportunities for children to continue learning and developing.",
      },
    ],
    whoServes: [
      "Rooted & Rising serves children who can benefit from opportunities for faith formation, literacy, creativity and early talent development.",
      "It also includes targeted support for vulnerable children and families facing circumstances that affect wellbeing or participation. Its different focus areas respond to children's interests, developmental stages and support needs.",
    ],
    howWeWork: [
      "Our approach combines supportive relationships, practical learning and care. Children are encouraged to participate, ask questions and explore their abilities, with guidance that respects their dignity and stage of development.",
      "Partnerships with families, churches, schools, communities, volunteers and institutions help connect children with relevant opportunities and support. Through these relationships, we seek to make learning meaningful and strengthen the encouragement available to children.",
    ],
    changeWeSeek: {
      intro: "Through Rooted & Rising, we aim to help children:",
      bullets: [
        "Develop Christian values and positive relationships.",
        "Strengthen reading, writing and communication skills.",
        "Express their ideas with greater confidence.",
        "Discover interests and develop emerging talents.",
        "Build curiosity, creativity and problem-solving abilities.",
        "Access practical support that contributes to their wellbeing.",
        "Experience belonging and recognise their ability to contribute.",
      ],
      closing: "These foundations can help children approach new experiences with confidence and continue growing as learners and members of their communities.",
    },
    getInvolved: {
      heading: "Help a child take root and rise",
      paragraphs: [
        "Your support can help children access books, learning materials, creative opportunities and practical care.",
        "Individuals and organisations can contribute resources, volunteer relevant skills or partner with us to support programme activities. Schools, churches and community groups can also help create spaces where children are encouraged to learn and develop.",
      ],
      closing: "Partner with Pleroma Sycamore Foundation to give children stronger foundations and opportunities to grow.",
    },
  },
  {
    id: 5,
    slug: "sycamore-institute",
    title: "The Sycamore Institute",
    tagline: "Equipping leaders, strengthening ministry and supporting mission",
    icon: Users,
    image: bible,
    intro: [
      "Leadership shapes how people are supported, how decisions are made and how organisations fulfil their purpose. Those entrusted with leadership need opportunities to keep learning, reflect on their responsibilities and receive guidance as they serve.",
      "The Sycamore Institute is Pleroma Sycamore Foundation's programme for leadership formation, ministry support and mission strengthening. It serves emerging and established leaders, ministers and mission workers within churches, communities and mission-focused organisations.",
      "Through training, mentoring, learning resources and practical support, the Institute seeks to develop leaders who combine competence with integrity and compassion. It also encourages collaboration, recognising that shared knowledge and supportive relationships can strengthen both individuals and the organisations they serve.",
    ],
    purpose: [
      "The Sycamore Institute exists to strengthen ethical, capable and service-oriented leadership. We seek to help leaders develop sound judgement, carry out their responsibilities effectively and remain attentive to the people affected by their decisions.",
      "Our work also recognises the personal demands of ministry and mission. Alongside developing skills, leaders need opportunities for reflection, renewal and connection with others who understand their responsibilities.",
      "The Institute brings these needs together through three complementary focus areas: Leadership Development, Ministry & Ministers Support, and Missions Support.",
    ],
    focusAreas: [
      {
        name: "Leadership Development",
        tagline: "Building the character and capabilities to lead well",
        paragraphs: [
          "Effective leadership requires a willingness to learn, the ability to work with others and a clear sense of responsibility. The Leadership Development strand offers training, mentoring and practical formation for emerging and established leaders.",
          "It connects leadership values with everyday practice, helping participants consider how they guide people, make decisions and respond to challenges within their organisations and communities.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Ethical and accountable leadership", text: "Encouraging honesty, responsible decision-making and an understanding of the trust placed in leaders." },
          { label: "Personal leadership development", text: "Helping participants reflect on their strengths, recognise areas for growth and develop habits that support dependable leadership." },
          { label: "Communication and relationships", text: "Strengthening the ability to listen, communicate clearly and work constructively with people from different backgrounds." },
          { label: "Leading teams and shared responsibilities", text: "Developing approaches to collaboration, delegation and supporting others to contribute effectively." },
          { label: "Planning and practical judgement", text: "Encouraging thoughtful priorities, realistic plans and decisions that reflect an organisation's purpose and responsibilities." },
          { label: "Mentorship and applied learning", text: "Connecting leadership lessons with real situations through guidance, reflection and opportunities to put learning into practice." },
        ],
        closing: "Through these areas, the Institute seeks to help leaders become more confident and capable while remaining accountable to the people and communities they serve.",
      },
      {
        name: "Ministry & Ministers Support",
        tagline: "Supporting those entrusted with spiritual leadership and care",
        paragraphs: [
          "Ministry involves teaching, guiding, caring for people and responding to a wide range of needs. Those who carry these responsibilities also need support, continued learning and opportunities to renew their sense of purpose.",
          "Ministry & Ministers Support provides capacity building, pastoral support, learning resources and opportunities for renewal and collaboration. It seeks to strengthen ministry practice while recognising the wellbeing of the person behind the role.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Continued learning and capacity building", text: "Supporting ministers to deepen their knowledge and develop capabilities relevant to their ministry responsibilities." },
          { label: "Pastoral support", text: "Creating opportunities for encouragement, reflection and guidance as ministers navigate the demands of their work." },
          { label: "Learning resources", text: "Improving access to materials that support preparation, teaching and ongoing development." },
          { label: "Renewal and reflection", text: "Encouraging ministers to make space to review their experiences, recognise their needs and renew their commitment to service." },
          { label: "Peer learning and collaboration", text: "Connecting ministers with opportunities to exchange experience, learn from one another and build supportive relationships." },
          { label: "Responsive ministry practice", text: "Encouraging thoughtful approaches to serving people and understanding the circumstances of the communities in which ministry takes place." },
        ],
        closing: "Through this support, we aim to help ministers carry out their responsibilities with greater confidence, care and access to useful resources.",
      },
      {
        name: "Missions Support",
        tagline: "Connecting mission with practical preparation and assistance",
        paragraphs: [
          "Mission initiatives require people, preparation and resources to carry out their work effectively. Training, strong partnerships and appropriate practical assistance can help mission workers respond more thoughtfully to the settings in which they serve.",
          "Missions Support strengthens mission initiatives through training, partnerships, mobilisation, logistical assistance and targeted field support. It seeks to connect identified needs with relevant expertise and resources.",
        ],
        bulletsIntro: "Key areas of focus include:",
        bullets: [
          { label: "Training and preparation", text: "Helping mission workers develop knowledge and practical capabilities relevant to their assignments and responsibilities." },
          { label: "Partnership development", text: "Encouraging relationships between churches, mission groups, institutions and other partners with complementary experience or resources." },
          { label: "Mobilisation", text: "Bringing together people, expertise and resources around identified mission needs." },
          { label: "Logistical assistance", text: "Supporting practical arrangements that enable mission activities to be organised and carried out, according to need and available resources." },
          { label: "Targeted field support", text: "Mobilising assistance for specific needs encountered by mission workers and initiatives in the communities they serve." },
          { label: "Learning and shared experience", text: "Encouraging mission partners to reflect on their work and exchange lessons that can inform future efforts." },
        ],
        closing: "The aim is to help mission initiatives become better prepared, more connected and better supported in fulfilling their purpose.",
      },
    ],
    whoServes: [
      "The Sycamore Institute serves emerging and established leaders, ministers and mission workers. This includes people carrying responsibilities within churches, ministries, community initiatives and mission-focused organisations.",
      "Its different areas of support respond to both individual and organisational needs. A developing leader may benefit from mentorship and practical formation, while an established minister or mission team may need opportunities for continued learning, collaboration or targeted assistance.",
    ],
    howWeWork: [
      "Our approach connects Christian values with practical learning and service. Training provides opportunities to build understanding, mentoring supports reflection and growth, and practical application helps participants relate learning to their responsibilities.",
      "We also work through partnerships that bring together relevant experience, resources and knowledge. These relationships support shared learning and help ensure that assistance responds to the needs of leaders, ministries and mission initiatives.",
      "Across the Institute, we encourage leadership that listens, respects the dignity of others and uses responsibility with care.",
    ],
    changeWeSeek: {
      intro: "Through the Sycamore Institute, we aim to support:",
      bullets: [
        "Leaders who demonstrate integrity, accountability and sound judgement.",
        "Stronger capabilities in communication, collaboration and organisational leadership.",
        "Ministers with greater access to learning, encouragement and opportunities for renewal.",
        "Mission workers who are better prepared and supported for their responsibilities.",
        "Stronger partnerships between churches, ministries and mission-focused organisations.",
        "More effective and compassionate service to communities.",
      ],
      closing: "We seek to help participants apply their development in ways that strengthen the people and organisations entrusted to their care.",
    },
    getInvolved: {
      heading: "Help strengthen leadership and service",
      paragraphs: [
        "Your expertise, time and resources can support those who lead and serve others.",
        "Experienced leaders and facilitators can contribute through training and mentorship. Churches, educational institutions and ministry networks can collaborate on learning opportunities, while individuals and organisations can support resources, ministerial development and specific mission needs.",
      ],
      closing: "Partner with Pleroma Sycamore Foundation to equip leaders and strengthen the communities they serve.",
    },
  },
];

export const getProgramBySlug = (slug) =>
  programs.find((program) => program.slug === slug);
