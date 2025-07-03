import img1 from '../assets/Image1.png'
import img2 from '../assets/Image2.png'
import img3 from '../assets/Image3.png'
import img4 from '../assets/Image4.png'
import img5 from '../assets/Image5.png'
import img6 from '../assets/Image6.png'
import img7 from '../assets/Image7.png'
import img8 from '../assets/Image8.png'
import img9 from '../assets/Image9.png'
import img10 from '../assets/Image10.png'
import section1 from '../assets/section1.png'
import section2 from '../assets/section2.png'
import section3 from '../assets/section3.png'
import section4 from '../assets/section4.png'
import section5 from '../assets/section5.png'
import section6 from '../assets/section6.png'
import section7 from '../assets/section7.png'
import section8 from '../assets/section8.png'
import section9 from '../assets/section9.png'
function shuffleSections(sections: Post["sections"]): Post["sections"] {
    const array = [...sections]; // انسخ المصفوفة حتى ما تأثر عالأصل
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export interface Section {
    image: string;
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
    text6?: string;
    text7?: string;
    text8?: string;
    text9?: string;
}

export interface Post {
    id: number;
    title: string;
    author: string;
    date: string;
    mainImage: string;
    categories: string[];
    desc: string;
    sections: Section[];
}
const sections: Post["sections"] = [
    {
        image: section1,
        text1: 'A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.',
        text2: 'If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.',
        text3: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.'
    },
    {
        image: section2,
        text1: 'Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.',
        text2: 'There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.',
        text3: 'Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.',
        text4: 'Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.',
        text5: 'Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.',
        text6: 'Breaking Down the Grid',
        text7: 'Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.',
        text8: 'Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.',
        text9: 'Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.'
    },
    {
        image: section3,
        text1: 'Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.',
        text2: 'Examples of Grids in Use',
        text3: 'Example 1: Hierarchical Grid',
        text4: 'Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.'
    },
    {
        image: section4,
        text1: 'The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        text2: 'Example 2: Column Grid',
        text3: 'Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.'
    },
    {
        image: section5,
        text1: 'Ritual’s four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        text2: 'Example 3: Modular Grid',
        text3: 'Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.'
    },
    {
        image: section6,
        text1: 'Behance’s design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        text2: 'Example 4: Breaking the Grid',
        text3: 'Our last example is Shrine from Google’s Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.'
    },
    {
        image: section7,
        text1: 'Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)',
        text2: 'Benefits of the Grid',
        text3: 'Using a grid benefits both end users and the designers alike:',
        text4: `Designers can quickly put together well-aligned interfaces.
                        Users can easily scan predictable grid-based interfaces.
                        A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`
    },
    {
        image: section8,
        text1: 'At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).',
        text2: 'Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.',
        text3: 'Choosing and Setting Up Your Grid',
        text4: 'How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.',
        text5: 'Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.',
        text6: 'Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.'
    },
    {
        image: section9,
        text1: 'Content or elements should be placed within and across columns, not gutters.',
        text2: 'Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.',
        text3: 'Conclusion',
        text4: 'Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.'
    }
]
export const posts: Post[] = [
    {
        id: 1,
        title: "UX review presentations",
        author: "Olivia Rhye",
        date: " 1 Jan 2023",
        mainImage: img1,
        categories: ["Design", "Research", "Presentation"],
        desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        sections: sections
    },
    {
        id: 2,
        title: "Migrating to Linear 101",
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        mainImage: img2,
        categories: ["Design", "Research"],
        desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        sections: shuffleSections(sections)
    },
    {
        id: 3,
        title: "Building your API Stack",
        author: "Lana Steiner",
        date: " 1 Jan 2023",
        mainImage: img3,
        categories: ["Design", "Research"],
        desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        sections: shuffleSections(sections)
    },
    {
        id: 4,
        title: "Grid system for better Design User Interface",
        author: "Olivia Rhye",
        date: " 1 Jan 2023",
        mainImage: img4,
        categories: ["Design", "Interface"],
        desc: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
        sections: shuffleSections(sections)
    },
    {
        id: 5,
        title: "Bill Walsh leadership lessons",
        author: "Alec Whitten",
        date: " 1 Jan 2023",
        mainImage: img5,
        categories: ["Leadership", "Management"],
        desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        sections: shuffleSections(sections)
    },
    {
        id: 6,
        title: "PM mental models",
        author: "Demi WIlkinson ",
        date: " 1 Jan 2023",
        mainImage: img6,
        categories: ["Product", "Research", "Frameworks"],
        desc: "Mental models are simple expressions of complex processes or relationships.",
        sections: shuffleSections(sections)
    },
    {
        id: 7,
        title: "What is Wireframing?",
        author: "Candice Wu",
        date: " 1 Jan 2023",
        mainImage: img7,
        categories: ["Design", "Research"],
        desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        sections: shuffleSections(sections)
    },
    {
        id: 8,
        title: "How collaboration makes us better designers",
        author: "Natali Craig",
        date: " 1 Jan 2023",
        mainImage: img8,
        categories: ["Design", "Research"],
        desc: "Collaboration can make our teams stronger, and our individual designs better.",
        sections: shuffleSections(sections)
    },
    {
        id: 9,
        title: "Our top 10 Javascript frameworks to use",
        author: "Drew Cano",
        date: " 1 Jan 2023",
        mainImage: img9,
        categories: ["Software Development", "Tools", "SaaS"],
        desc: "JavaScript frameworks make development easy with extensive features and functionalities.",
        sections: shuffleSections(sections)
    },
    {
        id: 10,
        title: "Podcast: Creating a better CX Community",
        author: "Orlando Diggs",
        date: "1 Jan 2023",
        mainImage: img10,
        categories: ["Podcasts", "Customer Success"],
        desc: "Starting a community doesn’t need to be complicated, but how do you get started?",
        sections: shuffleSections(sections)
    },
    {
        id: 11,
        title: "Grid system for better Design User Interface",
        author: "Olivia Rhye",
        date: " 1 Jan 2023",
        mainImage: img4,
        categories: ["Design", "Interface"],
        desc: "A grid system is a design tool used to arrange content on a webpage...",
        sections: shuffleSections(sections)
    },
    {
        id: 12,
        title: "UX review presentations",
        author: "Olivia Rhye",
        date: " 1 Jan 2023",
        mainImage: img1,
        categories: ["Design", "Research", "Presentation"],
        desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        sections: shuffleSections(sections)
    },
    {
        id: 13,
        title: "How collaboration makes us better designers",
        author: "Natali Craig",
        date: " 1 Jan 2023",
        mainImage: img8,
        categories: ["Design", "Research"],
        desc: "Collaboration can make our teams stronger, and our individual designs better.",
        sections: shuffleSections(sections)
    },
    {
        id: 14,
        title: "Migrating to Linear 101",
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        mainImage: img2,
        categories: ["Design", "Research"],
        desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        sections: shuffleSections(sections)
    },
    {
        id: 15,
        title: "Our top 10 Javascript frameworks to use",
        author: "Drew Cano",
        date: " 1 Jan 2023",
        mainImage: img9,
        categories: ["Software Development", "Tools", "SaaS"],
        desc: "JavaScript frameworks make development easy with extensive features and functionalities.",
        sections: shuffleSections(sections)
    },
    {
        id: 16,
        title: "Building your API Stack",
        author: "Lana Steiner",
        date: " 1 Jan 2023",
        mainImage: img3,
        categories: ["Design", "Research"],
        desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        sections: shuffleSections(sections)
    },
    {
        id: 17,
        title: "What is Wireframing?",
        author: "Candice Wu",
        date: " 1 Jan 2023",
        mainImage: img7,
        categories: ["Design", "Research"],
        desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        sections: shuffleSections(sections)
    },
    {
        id: 18,
        title: "Bill Walsh leadership lessons",
        author: "Alec Whitten",
        date: " 1 Jan 2023",
        mainImage: img5,
        categories: ["Leadership", "Management"],
        desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        sections: shuffleSections(sections)
    },
    {
        id: 19,
        title: "PM mental models",
        author: "Demi WIlkinson ",
        date: " 1 Jan 2023",
        mainImage: img6,
        categories: ["Product", "Research", "Frameworks"],
        desc: "Mental models are simple expressions of complex processes or relationships.",
        sections: shuffleSections(sections)
    },
    {
        id: 20,
        title: "What is Wireframing?",
        author: "Candice Wu",
        date: " 1 Jan 2023",
        mainImage: img7,
        categories: ["Design", "Research"],
        desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        sections: shuffleSections(sections)
    }
]