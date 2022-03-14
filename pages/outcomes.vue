<template>
  <div>
    <Navbar />
    <OutcomesHero />
    <div class="gap-4 pt-12 pb-8">
      <div
        class="
          col-start-1 col-span-6
          md:px-1
          px-2
          md:col-start-2 md:col-span-4
          text-xl
          font-normal
          text-center
          md:text-left
          mx-0
        "
      >
        <h3
          class="
            xl:text-2xl
            text-1xl text-gray-600
            font-extrabold
            pb-6
            sm:w-4/6
            w-5/6
            mx-auto
          "
        >
          HERE'S <span style="color: #00db80">H</span>OW:
        </h3>
        <div v-for="(data, i) in data" :key="i">
          <h1
            class="
              xl:text-4xl
              text-3xl text-gray-800
              font-extrabold
              pb-6
              sm:w-4/6
              w-5/6
              mx-auto
            "
          >
            {{ data.outcome }}
          </h1>
          <p class="sm:w-4/6 w-5/6 mx-auto pb-14 pl-0 md:pl-12">
            {{ data.description }}
          </p>
          <!-- <img id="content-mobile" class="object-center object-cover mx-auto pb-14 px-4" height="auto" width="auto" src="https://images.pexels.com/photos/3571094/pexels-photo-3571094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
            <img id="content-desktop" class="object-center object-cover mx-auto pb-14 px-4" height="500px" width="500px" src="https://images.pexels.com/photos/3571094/pexels-photo-3571094.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/> -->
        </div>
        <div id="our-goals" class="pt-20">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 100"
      class="m-0 p-0"
    >
      <path
        fill="#e5f9ff"
        d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
      ></path>
    </svg>
    <div style="background-color: #e5f9ff">
          <h3
            class="
              xl:text-2xl
              text-1xl text-gray-600
              font-extrabold
              pb-6
              sm:w-4/6
              w-5/6
              mx-auto
            "
          >
            OUR <span style="color: #00db80">G</span>OALS:
          </h3>
          <div v-for="(goal, i) in goals" :key="i">
            <h1
              class="
                xl:text-4xl
                text-3xl text-gray-800
                font-extrabold
                pb-6
                sm:w-4/6
                w-5/6
                mx-auto
              "
            >
              {{ goal.goal }}
            </h1>
            <p class="sm:w-4/6 w-5/6 mx-auto pb-14 pl-0 md:pl-12">
              {{ goal.description }}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          outcome: "1. Build Apps That Solve Simple Problems",
          description:
            "Start coming up with app ideas by identifying the frustrations that you have with the current way of doing things. Look at these problems. Research and try to find apps that solve your actual or similar problems. In case you find such apps, try them out and see whether it solves your current frustrations, or not.",
        },
        {
          outcome: "2. Build Apps That Provide Entertainment",
          description:
            "The consumption of entertainment has only increased since the introduction of smartphones and tablets. Mobile devices make it incredibly easy to get the latest news and updates about your favorite shows or movies. There are many reasons a business can benefit from entertainment app development. ",
        },
        {
          outcome: "3. Build Solutions That Solve Global Problems",
          description:
            "Today, people are starting to become active participants in the fight against global issues and as a result, progress is being made. However, there are still individuals unaware of pressing issues around them. One way of bringing these people up-to-date would be through the use of essays or research.",
        },
        {
          outcome: "4. Algorithms That Make Processes More Efficient",
          description:
            "Imagine you just arrived to your new job, and you are asked to make a part of the system faster. After a bit of investigation, you discover that most of the time is spent in some weird in-house algorithm that seems to take forever. How can you optimize this problem?",
        },
        {
          outcome: "5. Programs That Analyse Data & Discover Trends",
          description:
            "Data analysis involves sorting through massive amounts of unstructured information and deriving key insights from it. These insights are enormously valuable for decision-making at companies of all sizes. Build such programs That Analyse Data & Discover Trends.",
        },
        {
          outcome: "6. Software That Makes Automation Possible",
          description:
            "Automation software are applications that minimize the need for human input and can be used in a variety of ways in almost any industry. At the most basic, automation software is designed to turn repeatable, routine tasks into automated actions. Build such softwares to contribute something in softwarer industry.",
        },
        {
          outcome: "7. Write Programs That Work With Hardware",
          description:
            "It is designed to run a computer’s hardware and application software, and make the computer system available for use. It serves as the interface between hardware, application software, and the user.",
        },
      ],
      goals: [
        {
          goal: "1. Come to have leadership quality",
          description:
            "Leadership is about more than a title..To sustain in this competitive world having leadership quality  is must.Hence at ACE you will get an opportunity to acquire all the leadership skills",
        },
        {
          goal: "2. Come to have leadership quality",
          description:
            "Leadership is about more than a title..To sustain in this competitive world having leadership quality  is must.Hence at ACE you will get an opportunity to acquire all the leadership skills",
        },
        {
          goal: "3. Help to built resume",
          description:
            "Being a part of such a community driven program will have very good impact on your resume.Being a member not only highlight your soft skills but also shows that you are hardworking and multitasking as well",
        },
        {
          goal: "4. Learn more about yourself",
          description:
            "Being a part of ACE help you to stay focused on your goals.You can learn more about yourself you will find your strength and weekness.So you can work on your weekness and increase your strength as well",
        },
        {
          goal: "5. Develop your soft skills with us",
          description:
            "A lack of soft skills can limit your potential, or even be the downfall of your career. By working in our team you will develop delegation, teamwork, and communication abilities which are essential to being successful in this technological world",
        },
        {
          goal: "6. Learn to be team player",
          description:
            "Collaboration within a group can help to solve difficult problems. Brainstorming is a good opportunity for the team to exchange ideas and come up with creative ways of doing things.so be part of our team and be the solution finder",
        },
        {
          goal: "7. Be practical",
          description:
            "What’s great about ACE is that while you learn to use skills like project management, event management,designing you get to test them out in a safe environment where trial and error is appreciable",
        },
        {
          goal: "8. Diversity is our strength",
          description:
            "Our community is made of people having expertise in variety of fields. Learning about response to stimuli of different experts not only develop your skills but also improve your way of thinking.",
        },
        {
          goal: "9. Stay Motivated",
          description:
            "To achieve our dreams,our goals staying motivated and focused is crucial.Our different sessions,workshops,expert talks will help you to move forward to your dreams and motivate you as well.",
        },
        {
          goal: "10. Expand your friend circle",
          description:
            "Our discussion sessions will help you to meet new friends who can guide you and help you at your worst. So can expand your network it often lead to potential internship or employment opportunities in the future!",
        },
        {
          goal: "11. Enjoy with us",
          description:
            "As being a graduate student we all are always busy in doing assignments,completing journals,preparing for placement and many more. To take a break from this hectic schedule we will organize fun events as well so you can enjoy your college life at fullest.",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>

<style>
</style>