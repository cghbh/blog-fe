<template>
  <div class="list-page">
    <div class="list-page-sort">
      <span class="list-page-sort-item">最新</span>
      <span class="jiange">|</span>
      <span class="list-page-sort-item">阅读量</span>
      <span class="jiange">|</span>
      <span class="list-page-sort-item">评论量</span>
    </div>
    <div class="list-page-container">
      <list-item
        v-for="item in list"
        :item-value="item"
        :key="item.id"
        @zan="zanHandle"
        @detail="toDetail"
      ></list-item>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import page from "../../assets/images/test.png";
import ListItem from "./components/list-item.vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const typeList = ["前端", "后端", "测试", "随笔"];
    const list = ref([]);
    const router = useRouter();
    const getList = (length) => {
      for (let index = 0; index < length; index++) {
        list.value.push({
          id: Math.random() * Math.random(),
          avatar: page,
          type: typeList[Math.floor(Math.random() * typeList.length)],
          title:
            "经历了错误的一键替换，然后重来，再重来，总算成就了这么一个网站经历了错误的一键替换，然后重来，再重来，总算成就了这么一个网站",
          time: "2022-01-28 11:24:35",
          content:
            "记忆里的冬天，最美好的时候是在小时候。有个印象很深刻的场景总是浮现在我脑海里，大概五六岁的样子，我坐在父亲的自行车后面，手上戴着一双红色的手套，伸手抓雪花的场景。红色的毛线帽，红色的围巾，红色的手套，俨然就是童话里面的“小红帽”。南方的冬天是阴郁的，即便是风伴着冰雪，小脸冻得红扑扑的，脚上手上长了冻疮，那也是有暖意的，白天我不喜欢待在屋子里，总想往外面去玩雪，看着厚厚的积雪堆在房顶上，铺在地面上，就迫不及待的要穿上小靴子，飞奔一样的出去开始堆雪人，和小伙伴玩起了雪仗。在我眼里，它一点也不冷，而且是一个非常好玩的季节。",
          commentNum: Math.floor(Math.random() * 100 + 5),
          // 阅读量
          readNum: Math.floor(Math.random() * 50000 + 100),
        });
      }
    };

    const zanHandle = () => {
      console.log("点赞中");
    };

    const toDetail = () => {
      console.log("跳转到详情页面");
      router.push("/detail");
    };

    onMounted(() => {
      getList(Math.floor(Math.random() * 10 + 1));
    });
    return {
      list,
      zanHandle,
      toDetail,
    };
  },
  emits: ["zan", "detail"],
  components: {
    ListItem,
  },
};
</script>

<style lang="less" scoped>
.list-page {
  width: 100%;

  &-sort {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 25px;
    background-color: #fff;
    font-size: 14px;
    border-bottom: 1px solid #eaeaea;
    user-select: none;
    border-radius: 4px 4px 0 0;

    &-item {
      color: #909090;
      cursor: pointer;
    }

    .jiange {
      margin: 0 10px;
      color: #999;
    }
  }
}

.list-page-container ::v-deep .list-item:first-of-type {
  border-radius: 0 0 4px 4px;
}
</style>
