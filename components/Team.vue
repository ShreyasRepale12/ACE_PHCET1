<template>
  <div>
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
    <div
      class="container flex justify-center mx-auto"
      style="background-color: #e5f9ff"
    >
      <div>
        <p class="text-gray-500 text-lg text-center font-normal pb-3">
          PEOPLES BEHIND <span style="color: #00db80">ACE</span>
        </p>
        <h1
          class="
            xl:text-4xl
            text-3xl text-center text-gray-800
            font-extrabold
            pb-6
            sm:w-4/6
            w-5/6
            mx-auto
          "
        >
          The Talented People Behind the Scenes of the Club
        </h1>
      </div>
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Principal Sir
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 px-4 pt-12">
      <div class=""></div>
        <TeamCard
          :name="data[0].name"
          :post="data[0].post"
          :description="data[0].description"
          :avatar="data[0].avatar"
          :email="data[0].email"
          :linkedin="data[0].linkedin"
        />
      <div class=""></div>
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Faculty Co-Ordinators
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-52 pt-8">
        <TeamCard
          :name="data[1][0].name"
          :post="data[1][0].post"
          :description="data[1][0].description"
          :avatar="data[1][0].avatar"
          :email="data[1][0].email"
          :linkedin="data[1][0].linkedin"
        />
        <TeamCard
          :name="data[1][1].name"
          :post="data[1][1].post"
          :description="data[1][1].description"
          :avatar="data[1][1].avatar"
          :email="data[1][1].email"
        />
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Presidents
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-52 pt-8">
      <TeamCard
          :name="data[2][0].name"
          :post="data[2][0].post"
          :description="data[2][0].description"
          :avatar="data[2][0].avatar"
          :email="data[2][0].email"
        />
        <TeamCard
          :name="data[2][1].name"
          :post="data[2][1].post"
          :description="data[2][1].description"
          :avatar="data[2][1].avatar"
          :email="data[2][1].email"
        />
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Technical Heads
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-52 pt-8">
      <TeamCard
          :name="data[3][0].name"
          :post="data[3][0].post"
          :description="data[3][0].description"
          :avatar="data[3][0].avatar"
          :email="data[3][0].email"
        />
        <TeamCard
          :name="data[3][1].name"
          :post="data[3][1].post"
          :description="data[3][1].description"
          :avatar="data[3][1].avatar"
          :email="data[3][1].email"
        />
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Event Co-Ordinators
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-52 pt-8">
      <TeamCard
          :name="data[4][0].name"
          :post="data[4][0].post"
          :description="data[4][0].description"
          :avatar="data[4][0].avatar"
          :email="data[4][0].email"
        />
        <TeamCard
          :name="data[4][1].name"
          :post="data[4][1].post"
          :description="data[4][1].description"
          :avatar="data[4][1].avatar"
          :email="data[4][1].email"
        />
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Content Writers
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 px-4 pt-12">
      <div class=""></div>
        <TeamCard
          :name="data[5][0].name"
          :post="data[5][0].post"
          :description="data[5][0].description"
          :avatar="data[5][0].avatar"
          :email="data[5][0].email"
        />
      <div class=""></div>
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Content Writers
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-52 pt-8">
      <TeamCard
          :name="data[6][0].name"
          :post="data[6][0].post"
          :description="data[6][0].description"
          :avatar="data[6][0].avatar"
          :email="data[6][0].email"
        />
        <TeamCard
          :name="data[6][1].name"
          :post="data[6][1].post"
          :description="data[6][1].description"
          :avatar="data[6][1].avatar"
          :email="data[6][1].email"
        />
        <TeamCard
          :name="data[6][2].name"
          :post="data[6][2].post"
          :description="data[6][2].description"
          :avatar="data[6][2].avatar"
          :email="data[6][2].email"
        />
        <TeamCard
          :name="data[6][3].name"
          :post="data[6][3].post"
          :description="data[6][3].description"
          :avatar="data[6][3].avatar"
          :email="data[6][3].email"
        />
        <TeamCard
          :name="data[6][4].name"
          :post="data[6][4].post"
          :description="data[6][4].description"
          :avatar="data[6][4].avatar"
          :email="data[6][4].email"
        />
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Graphic Designers
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-52 pt-8">
      <TeamCard
          :name="data[7][0].name"
          :post="data[7][0].post"
          :description="data[7][0].description"
          :avatar="data[7][0].avatar"
          :email="data[7][0].email"
        />
        <TeamCard
          :name="data[7][1].name"
          :post="data[7][1].post"
          :description="data[7][1].description"
          :avatar="data[7][1].avatar"
          :email="data[7][1].email"
        />
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Web Developers
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 px-4 md:px-52 pt-8">
      <TeamCard
          :name="data[8][0].name"
          :post="data[8][0].post"
          :description="data[8][0].description"
          :avatar="data[8][0].avatar"
          :email="data[8][0].email"
        />
        <TeamCard
          :name="data[8][1].name"
          :post="data[8][1].post"
          :description="data[8][1].description"
          :avatar="data[8][1].avatar"
          :email="data[8][1].email"
        />
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Media Coverage
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 px-4 pt-12">
      <div class=""></div>
        <TeamCard
          :name="data[9][0].name"
          :post="data[9][0].post"
          :description="data[9][0].description"
          :avatar="data[9][0].avatar"
          :email="data[9][0].email"
        />
      <div class=""></div>
    </div>
    <p class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500 text-center font-normal pt-12 pb-2">
          Treasurer
        </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 px-4 pt-12">
      <div class=""></div>
        <TeamCard
          :name="data[10][0].name"
          :post="data[10][0].post"
          :description="data[10][0].description"
          :avatar="data[10][0].avatar"
          :email="data[10][0].email"
        />
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "Dr. Jagdish W. Bakal",
          post: "Principal",
          description:
            "Dr. Jagdish W. Bakal sir is the Principal of PHCET and a great support for us. Dr Bakal has 32 years of Industry and Academia experience. He already has 7 Patents on his credit and has published more than 100 papers in International Journals",
          avatar:
            "https://phcet.ac.in/wp-content/uploads/2021/11/Dr.-Jagdish-Bakal-1.jpg",
          email: "mailto:jwbakal@mes.ac.in",
          linkedin: "https://in.linkedin.com/in/jagdish-bakal0508",
        },
        [
          {
            name: "Ms. Prachi Sorte",
            post: "Faculty Co-Ordinator",
            description: "IT Department",
            avatar: "https://phcet.ac.in/wp-content/uploads/2020/04/Ms.-Prachi-Sorte.jpg",
            email: "mailto:prsorte@mes.ac.in",
            linkedin: "https://in.linkedin.com/in/prachi-sorte-68864b1b6"
          },
          {
            name: "Kajal Patel",
            post: "Faculty Co-Ordinator",
            description:
              "IT Department",
            avatar: "",
            email: "mailto:prsorte@mes.ac.in",
          },
        ],
        [
          {
            name: "Nitish Shetty",
            post: "President",
            description:
              "IT Department",
            avatar:
              "https://csi.phcet.ac.in/static/media/joint-event-head.20932f19.png",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Aakanksha Chavan",
            post: "President",
            description:
              "IT Department",
            avatar:
              "IT Department",
            email: "mailto:jwbakal@mes.ac.in",
          },
        ],
        [
          {
            name: "Bhavika Rajput",
            post: "Technical Head",
            description:
              "IT Department",
            avatar:
              "IT Department",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Vivek Pawar",
            post: "Technical Head",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
        ],
        [
          {
            name: "Zaid Mujawar",
            post: "Event Co-Ordinator",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Omkar Parab",
            post: "Event Co-Ordinator",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
        ],
        [
          {
            name: "Mihir Chewale",
            post: "Content Writing",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
        ],
        [
          {
            name: "Rutuja Kore",
            post: "Publicity",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Bhavya Parmar",
            post: "Publicity",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Hindavi Mhatre",
            post: "Publicity",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Ankita Mhatre",
            post: "Publicity",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Adarsh Poojary",
            post: "Publicity",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          }
        ],
        [
          {
            name: "Nishant Patil",
            post: "Graphic Designer",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Shubham Mahto",
            post: "Graphic Designer",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          }
        ],
        [
          {
            name: "Tejas Magade",
            post: "Web Developer",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
          {
            name: "Avishkar Vichare",
            post: "Web Developer",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          }
        ],
        [
          {
            name: "Hrushikesh Tambe",
            post: "Media Coverage",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          },
        ],
        [
          {
            name: "Anurag Sarvankar",
            post: "Treasurer",
            description:
              "IT Department",
            avatar:
              "",
            email: "mailto:jwbakal@mes.ac.in",
          }
        ]
      ],
    };
  },
};
</script>