<template lang="html">
  <div class="main">
    <div class="title">
      <h1>newPromises</h1>
    </div>
    <img src="~/static/favicon.png" alt="JS">
    <div class="discript">
      Popular questions about javascript with stackoverflow
    </div>
    <div class="item" v-for="item in items">
      <div class="item-title">
        <a :href='item.link'><b>{{ item.title }}</b></a>
      </div>
      <div class="item-info">
        <div>
          Viewed: {{ item.view_count }}
          Asnwer: {{ item.answer_count}}
        </div>
        <div>
          Created: {{ new Date(item.creation_date * 1000) }}
        </div>
      </div>
      <div class="item-tags">
        <div v-for="tag in item.tags">
          #{{ tag }}
        </div>
      </div>
    </div>
    <div class="footer">
      Open-Source project by <a href="https://gitlab.com/deadblackclover">DEADBLACKCLOVER</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data(){
    return{
      items: ''
    }
  },
  mounted(){
    let vm = this
    axios.get('https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow')
    .then(function (res) {
      vm.items = res.data.items
    })
    .catch(function (res) {
      console.error(res);
    })
  }
}
</script>
