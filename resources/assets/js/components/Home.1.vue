<template>
  <div>
    <group >
      <radio title="type" v-model="type" :options="['1', '2', '3', '4', '5']"></radio>
    </group>
    <panel  :footer="footer" :list="list" :type="type" @on-img-error="onImgError"></panel>
    <div id = "app-2">
        <span>{{ $message }}</span>
    </div> 
    <Test1></Test1>
  </div>
</template>



<script>
import { Panel, Group, Radio } from 'vux';
import Test1 from './Test';

export default {
  components: {
    Panel,
    Group,
    Radio,
    Test1
  },
  methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      type: '1',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一121',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二234',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      footer: {
        title: 'footer',
        url: 'http://vux.li'
      }
    }
  }
}


</script>