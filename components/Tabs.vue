<template>
    <div class="flex mt-6 lg:mt-20 px-4 md:px-20 w-full">
      <div class="w-1/3">
        <div
          v-for="item in data"
          :key="item.value"
          :class="[
            'py-2 px-4 cursor-pointer text-4xl font-semibold', 
            selectedTab === item.value ? 'text-[#14a800]' : 'text-gray-300'
          ]"
          @click="selectTab(item.value)"
        >
          {{ item.label }}
        </div>
      </div>
  
      <div class="w-2/3 ">
        <div class="grid grid-cols-2 gap-4 w-full">
    <ul 
      v-for="item in data" 
      :key="item.value" 
      v-show="selectedTab === item.value"
      class="pl-4 list-none text-2xl"
    >
      <li 
        v-for="desc in item.desc" 
        :key="desc" 
        :class="{'text-[#14a800]': selectedDesc === desc, 'text-gray-500 py-1': selectedDesc !== desc}" 
        @mouseover="selectedDesc = desc" 
        @mouseleave="selectedDesc = null"
      >
        {{ desc }}
      </li>
    </ul>
    <ul 
      v-for="item in data" 
      :key="item.value" 
      v-show="selectedTab === item.value"
      class="pl-4 list-none text-2xl"
    >
      <li 
        v-for="desctwo in item.desctwo" 
        :key="desctwo" 
        :class="{'text-[#14a800]': selectedDescTwo === desctwo, 'text-gray-500 py-1': selectedDescTwo !== desctwo}" 
        @mouseover="selectedDescTwo = desctwo" 
        @mouseleave="selectedDescTwo = null"
      >
        {{ desctwo }}
      </li>
    </ul>
  </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const data = ref([
    {
      label: 'Top Skills',
      value: 'topskill',
      desc: [
        'Generative AI Specialists',
        'Data Entry Specialists',
        'Video Editors',
        'Data Analyst',
        'Shopify Developer',
        'Ruby on Rails Developer',
        'Android Developer',
        'Bookkeeper',
        'Content Writer',
        'Copywriter',
        'Data Scientist',
        'Front-End Developer',
        'Game Developer',
        'Graphic Designer',
        'iOS Developer',
        'Java Developer',
      ],
      desctwo: [
        'JavaScript Developer',
        'Logo Designer',
        'Mobile App Developer',
        'PHP Developer',
        'Python Developers',
        'Resume Writer',
        'SEO Expert',
        'Social Media Manager',
        'Software Developer',
        'Software Engineer',
        'Technical Writer',
        'UI Designer',
        'UX Designer',
        'Virtual Assistant',
        'Web Designer',
        'Wordpress Developer',
      ],
    },
    {
      label: 'Trending Skills',
      value: 'trendingskill',
      desc: [
        'Generative AI Specialists',
        'Prompt Engineering Specialists',
        'AI Content Creators',
        'ChatGPT Specialists',
        'AI Chatbot Specialists',
        'Stable Diffusion Artists',
        'Blockchain',
        'Go development',
        'Node.js',
        'Vue.js',
        'HR consulting',
        'Microsoft Power BI',
        'Instructional design',
        'React.js',
        'Videographers',
        'HTML5 Developers',
      ],
      desctwo: [
        'Ghostwriters',
        'Unity 3D Developers',
        'Business Consultants',
        'Coders',
        'Web Developers',
        'Illustrators',
        'Google AdWords Experts',
        'Digital Marketers',
        'Project Managers',
        'Ruby Developers',
        'AngularJS Devleopers',
        'Full Stack Developers',
        'React Native Developers',
        'Virtual Assistant',
        'Swift Developers',
        'CSS Developers',
        'Back End Developers',
      ],
    },
    {
      label: 'Top skills in US',
      value: 'topskillsinus',
      desc: [
      "Accountants in US",
    "CAD Designers in US",
    "Curriculum Developer in US",
    "Ebook Designers in US",
    "Fashion Designers in US",
    "Ghostwriters in US",
    "Google Adwords Experts in US",
    "Graphic Designers in US",
    "JavaScript Developers in US",
    "Product Developers in US",
    "Shopify Developers in US",
    "SquareSpace Developers in US",
    "Tax Preparers in US",
    "Technical Support Agents in US",
    "Virtual Assistants in US",
    "Web Designers in US",
    "WooCommerce Developers in US",
    "WordPress Developers in US",
    "Writers in US",
    "Zoho CRM Specialists in US"
      ],
      desctwo: [
      "Accountants Near North Carolina",
    "Adobe Photoshop Experts Near San Antonio, TX",
    "Android Developers Near San Francisco, CA",
    "Bookkeepers Near Los Angeles, CA",
    "Business Coaches Near Atlanta, GA",
    "Fashion Designers Near Los Angeles, CA",
    "Grant Writers Near Chicago, IL",
    "Graphic Designers Near New York, NY",
    "Logo Designers Near Pittsburgh, PA",
    "Mechanical Engineers Near Seattle, WA",
    "Music Producers Near Chicago, IL",
    "Photo Editors Near Los Angeles, CA",
    "Photographers Near Brooklyn, NY",
    "Product Photographers Near Seattle, WA",
    "Resume Writers Near Chicago, IL",
    "SEO Experts Near New York, NY",
    "Social Media Managers Near Los Angeles, CA",
    "Videographers Near Dallas, TX",
    "Virtual Assistants Near Charlotte, NC",
    "Web Designers Near San Francisco, CA"
      ],
    },
    {
      label: 'Project Catalog™',
      value: 'projectcatalog',
      desc: [
      "Generative AI Services",
    "Resume Writing Services",
    "SEO Services",
    "Translation Services",
    "Transcription Services",
    "Virtual Assistant Services",
    "Email Marketing Services",
    "Web Design Services",
    "Proofreading Services",
    "Business Consulting Services",
    "Logo Design Services",
    "Architecture/Interior Design Services",
    "Branding Services",
    "Social Media Management Services",
    "Video Editing Services",
    "Lead Generation Services",
    "Content Marketing Services",
    "Survey Services",
    "Landscape Design Services",
    "Photoshop Services"
      ],
      desctwo: [
      "Mobile App Development Services",
    "Data Entry Services",
    "Building Information Modeling Services",
    "Podcast Editing Services",
    "Wellness Services",
    "Video Marketing Services",
    "WordPress Development Services",
    "Ecommerce Services",
    "Influencer Marketing Services",
    "Public Relations Services",
    "QA Services",
    "Podcast Marketing Services"
      ],
    },
   
  ]);
  
  const selectedTab = ref('topskill');
  
  const selectTab = (tab) => {
    selectedTab.value = tab;
  };

  const selectedDesc = ref(null);
  const selectedDescTwo = ref(null);
  </script>
  
  <style scoped>
  .flex {
    display: flex;
  }
  .border-r {
    border-right: 1px solid #e5e7eb;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  </style>
  