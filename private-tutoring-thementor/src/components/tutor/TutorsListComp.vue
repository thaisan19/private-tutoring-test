<template>
  <div class="toggle-search">
		<button @click="searchOn = !searchOn"><h1>🔎</h1></button>
	</div>
	<transition mode="out-in"
	enter-active-class="animate__animated animate__zoomIn animate__faster"
	leave-active-class="animate__animated animate__zoomOut animate__faster">
  	<div class="search-lable" v-if="searchOn">
    	<input type="text" name="search-lable" v-model="search" placeholder="Search by: Courses' Name | Price">
  </div>
	</transition>
  <div class="tutors-list" v-if="filteredTutors.length > 0">
    <ul>
      <li 
        v-for="tutor in filteredTutors" 
        :key="tutor.id"
        class="tutor-list"
        >
        <div class="tutor-profile-img">
          <img src="https://cdn.dribbble.com/users/2364329/screenshots/10481283/media/f013d5235bfcf1753d56cad154f11a67.jpg?compress=1&resize=400x300">
        </div>
        <div class="tutor-desc">
          <h1>{{ tutor.userName }}</h1>
          <p>{{ tutor.aboutMe }}</p>
          <ul>
            <li v-for="expertise in tutor.expertises" :key="expertise.id">
              {{ expertise }}
            </li>
          </ul>
        </div>
        <div class="tutor-actions">
          <div class="tutor-rate">
            <h2>${{ tutor.monthlyRate }}</h2>
            <h3>monthly rate</h3>
          </div>
          <div class="tutor-button">
           <main-button mode="btn black" @click="openTutor(tutor)">
            Details 🧷
           </main-button>
           <main-button mode="btn black" link to="/">
            Request 🙌
           </main-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <h1>No searching result, please try again...🙏🌿</h1>
  </div>
  <ModalView 
    v-if="openedTutor"
    @closeModal="openedTutor = null">
    <TutorView :tutor="openedTutor" @changeTutor="changeTutor" />
  </ModalView>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import ModalView from '../main-components/ModalView.vue'
import TutorView from './TutorView.vue'

export default {
  components: {
    ModalView,
    TutorView
  },
  data() {
    return {
      search: '',
      searchOn: false
    }
  },
  async setup() {
    let res = await axios.get('http://localhost:3000/tutors')
    let tutors = ref(res.data);
    console.log(tutors)

    return {
      tutors: ref(tutors),
      openedTutor: ref(null)
    }
  },
  
  methods: {
    openTutor(tutor) {
      this.openedTutor = tutor;

      if(tutor) {
        tutor.view = true
        this.updateTutor(tutor)
      }
    },
    changeTutor({closeModal}) {
      let tutor = this.openedTutor
      if(closeModal) {
        this.openedTutor = null
      }
    },
    updateTutor(tutor) {
      axios.put(`http://localhost:3000/tutors/${tutor.id}`, tutor)
    }
  },
  computed: {
    filteredTutors() {
      return this.tutors.filter((tutor) => {
        // var exp = tutor.expertises.filter(ele => {
        //   console.log(ele)
        // })
        const expLen = tutor.expertises.length;
        for (const i = 0; i < expLen; i++) {
          console.log(tutor.expertises[i+2])
          return tutor.expertises[i].toLowerCase().includes(this.search.toLowerCase().trim()) || tutor.expertises[i+1].toLowerCase().includes(this.search.toLowerCase().trim()) || tutor.userName.toLowerCase().includes(this.search.toLowerCase().trim()) || tutor.monthlyRate.includes(this.search.toLowerCase().trim())
        }
        
        // return tutor.userName.toLowerCase().includes(this.search.toLowerCase().trim()) || tutor.hourlyRate.includes(this.search.toLowerCase().trim())
      })
    } 
  }
}
</script>

<style scoped>
  .tutors-list > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-gap: 3rem;
    list-style: none;
  }
  .tutors-list > ul > li {
    background: #fff;
    box-shadow: -10px 10px 0px rgba(0,0,0,.05);
    overflow: hidden;
    border: 3px solid var(--black);
  }
  .tutor-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tutor-profile-img {
    width: 22%;
    height: 100%;
    overflow: hidden;
  }
  .tutor-desc {
    width: 55%;
    height: 100%;
    padding-left: 1em;
    padding-right: 0;
    
  }
  .tutor-desc > p {
    padding: 0em 0em;
    padding-left: 1em;
    overflow: hidden;
 	  text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .tutor-desc > h1 {
    padding: .5em 0 .5em .5em;
  }
  .tutor-desc > ul {
    padding-top: 1em;
    display: flex;
    align-items: center;
    padding-left: 1em;
    cursor: pointer;
    flex-wrap: wrap;
  }
  .tutor-desc > ul > li {
    margin-right: .5em;
    padding: .5em;
    background: var(--white);
    box-shadow: inset 0px 5px 5px rgba(0,0,0,.1);
    /* border: 2px solid var(--black); */
    border-radius: 20px;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: .5em;
  }
  .tutor-actions {
    width: 23%;
    padding: 1em;
    padding-left: 0em;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    background: url('../../assets/background-pattern-vertical.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .tutor-profile-img img{
    width: 100%;
    height: 100%;
	  object-fit: cover;
	  object-position: 50% 50%;
  }
  .tutor-button button{
    margin-bottom: .5em;
  }
  .tutor-button {
    padding-bottom: 1.5em;
  }
  .tutor-rate {
    padding-top: 1em;
  }
</style>