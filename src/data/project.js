const projects = [
  {
    id: 'chefster',
    title: 'Chefster Application',
    description: 'A comprehensive mobile diet application.',
    thumbnail: require('../assets/chefster.jpeg'), // ✅ Clearer name for the main image
    technologies: 'React Native, Node.js, PostgreSQL, Firebase',
    introduction: `This application provides users with the best recipes based on their available ingredients. Additionally, users can chat with their friends in private chats or group chats.`,
    loginPage: `Users can register or log in to the application, and their information is stored in Firebase.`,
    recipeRecommender: `Users can select their available ingredients and specify any allergies or diet preferences they have.`,
    recipePage: `After selecting their preferred recipes, users will be directed to this page for step-by-step cooking instructions.`,
    chatScreen: `Users can view all their available chats (private and group).`,
    chatDetail: `This is the real-time chat page.`,
    loginImg: require('../assets/Chefster/login.jpg'),
    recipeRecommenderImg: require('../assets/Chefster/recipeRecommender.jpg'),
    recipeImg: require('../assets/Chefster/recipe.jpg'),
    chatImg: require('../assets/Chefster/ChatScreen.jpg'),
    chatDetailImg: require('../assets/Chefster/ChatDetail.jpg'),
    link: '/projects/chefster',
  }
  ,
  {
    id: 'telus-analysis',
    title: 'Telus Data Analysis',
    description: 'A thorough analysis of Prospect Telus Business customers.',
    introduction: `
      This project involved extracting current Telus business customers from all industries across Canada.
      The data pipeline below illustrates the step-by-step process of this analysis, leveraging Google's highly scalable cloud infrastructure.
    `,
    pipelineDescription: `This section provides a visual representation of the data pipeline used for analysis.`,
    bigQueryDescription: `Structured table design, query execution, and Python scripts used within BigQuery for efficient data management.`,
    insights: `Key findings and insights derived from the data analysis.`,
    chartDescription: `Bar, pie, and line charts illustrating prospect distribution and reachability trends.`,

    thumbnail: require('../assets/telus.jpg'),
    technologies: 'Python, BigQuery, SQL',
    link: '/projects/telus-analysis',
    pipelineImage: require('../assets/Telus/pipeline.jpg'),
    bigQueryImage: require('../assets/Telus/bigquery.jpg'),
    insightsImage: require('../assets/Telus/observations.jpg'),
    chartImage: require('../assets/Telus/charts.jpg'),
  },
  {
    id: 'travel-app',
    title: 'Travel Application',
    description: 'A dynamic web application for seamless travel bookings using .NET and MySQL.',
    introduction: `
      This project enables users to conveniently book flights, hotels, and rental cars in advance, 
      ensuring a smooth and hassle-free travel experience.
    `,
    homepageDescription: `
      The homepage provides users with essential travel policies, personalized recommendations, 
      and intuitive navigation for booking options.
    `,
    flightListDescription: `
      A list of available flights, allowing users to explore different travel options based on their preferences.
    `,
    flightDetailsDescription: `
      Users can view detailed flight information, including departure times, prices, and airline details, 
      with an option to proceed with booking.
    `,
    bookingReceiptDescription: `
      After booking, users receive a detailed receipt summarizing their transaction, with options to print or save.
    `,

    thumbnail: require('../assets/travel.webp'),
    technologies: 'MVC C#, MySQL',
    link: '/projects/travel-app',
    homepageImage: require('../assets/TravelApp/home.jpeg'),
    flightListImage: require('../assets/TravelApp/flightList.jpg'),
    flightDetailsImage: require('../assets/TravelApp/flightDetails.jpg'),
    bookingReceiptImage: require('../assets/TravelApp/flightReceipt.jpg'),
  },
  {
    id: "spring-boot",
    title: "Java Spring Boot Application",
    description: "A robust Room Booking and Event Approval system for colleges, leveraging Docker, Postman, and MongoDB/PostgreSQL.",
    introduction: "This application manages room availability at the college, allowing users to book rooms and create events. Event approvals are handled by staff members. Authentication for administrators and students is facilitated through Postman.",
    docker: "All microservices are containerized and managed using Docker.",
    postman: "API requests and testing are performed via Postman.",
    swagger: "Requests can also be executed and documented using Swagger UI.",
    thumbnail: require("../assets/springBoot.jpg"),
    technologies: "Java Spring Boot, PostgreSQL/MongoDB, Docker, Postman",
    link: "/projects/spring-boot",
    dockerImg: require("../assets/WebApp/Docker.jpg"),
    postmanImg: require("../assets/WebApp/Postman.jpg"),
    swaggerImg: require("../assets/WebApp/Swagger.jpg")
  }
  
];

export default projects;
