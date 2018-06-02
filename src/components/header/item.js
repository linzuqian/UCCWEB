import Vue from 'vue'

export default {
  name: 'components-header',
  data () {
    return {
      productBox: false,
      currentIndex:'0',
      currentBg: '0',
      imgUrl:require('./images/nav-bg1-1.jpg'),
    }
  },
  mounted () {
    this.init()
  },
  watch:{
    currentIndex(){
      this.init()
    }
  },
  methods: {
    // 点击产品弹出下拉
    openProduct (index) {
      this.currentIndex = index
      this.productBox = !this.productBox
    },
    // 点击切换
    switchPage (index) {
      this.currentIndex = index
      this.productBox = false
    },
    init () {
      this.slideLi(this.currentIndex)
    },
    // 鼠标移入
    movein (index) {
      this.slideLi(index)
    },
    slideLi(index) {
      let bg = document.getElementById("backgroundSlide")
      let currentLi = document.getElementsByTagName('li')[0].offsetWidth
      bg.style.left = currentLi*index + 'px' 
    },
    // 鼠标移出
    moveout () {
      this.init()
    },
    goToPage(id){
      this.productBox = false
      this.$router.push({
        name:'product.index',
        query:{
          id:id
        }
      })
    },
    // 产品鼠标移入改变背景图
    moveinBg (index) {
      this.currentBg = index
    }
  }
}
