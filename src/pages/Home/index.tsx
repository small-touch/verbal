import { Button, Form, Input, Select, Tag } from 'antd';
import { useState } from 'react';
import styles from './index.less';

const { Option } = Select;

const demo = [
  {
    label: '我闻到谁家在炒菜了',
    type: '话题',
    reply: ['天下没有不透风的墙，而隔壁的晚饭是真的香'],
  },
  {
    label: '真正的爱情，不是瞬间的激情，而是长久的陪伴',
    type: '经典语句',
    reply: [],
  },
  {
    label: '趁年轻就得多出去走走，以后送外卖也认识路',
    type: '经典语句',
    reply: [],
  },
  {
    label: '犯了错，先检讨别人，再安慰自己',
    type: '经典语句',
    reply: [],
  },
  {
    label: '运动是一种享受，但我不爱运动，因为我不是那种贪图享受的人',
    type: '经典语句',
    reply: [],
  },
  {
    label: '生活给了我很多变胖的机会，都被我抓住了',
    type: '经典语句',
    reply: [],
  },
  {
    label: '你知道的，除了缅甸和我，没有人为你掏心掏肺。',
    type: '经典语句',
    reply: [],
  },
  {
    label: '咱俩真是一周不见，如隔7天呀',
    type: '经典语句',
    reply: [],
  },
  {
    label: '好想说月老给我牵线时能不能换成钢丝绳，红线太不结实了，隔三差五就断',
    type: '经典语句',
    reply: [],
  },
  {
    label: '希望我能成为一个有钱又有趣的人，实在不行光有钱也行～',
    type: '经典语句',
    reply: [],
  },
  {
    label: '做事三思而后行：能不能不做，能不能明天做，能不能交给别人做',
    type: '经典语句',
    reply: [],
  },
  {
    label: '挣钱是一种能力，花钱是一种技术！我能力有限，但技术高超~',
    type: '经典语句',
    reply: [],
  },
  {
    label: '我长痘了',
    type: '回复',
    reply: ['我长痘是真的长痘，你长痘是美得冒泡'],
  },
  {
    label: '单身的原因',
    type: '回复',
    reply: [
      '好奇你单身的原因',
      '那我给你盖被子吧，天冷了不要冻着了',
      '我过去你会不会对我使坏，我可是正人君子',
      '放心吧，就算过去抱你也是隔着被子抱',
      '因为这样就可以抱你一辈子了',
      '迟早有一天要抱着你睡觉，说不定今晚就实现了',
    ],
  },
  {
    label: '遇到事很生气',
    type: '回复',
    reply: [
      '遇到这样的领导真是让人难受，我特别理解你，你这么努力他都看不到，一定是眼睛有问题',
      '别生气了，我发现一家火锅店，特别好吃，你一定喜欢，一会带你去吃',
    ],
  },
  {
    label: '买衣服',
    type: '回复',
    reply: [
      '你穿上一定很好看，这个款式很适合你',
      '看你平时的穿着很有品位，能不能教教我，怎么提高一下审美',
      '我最近也想买两件衣服，但是我眼光不太好，能不能请你帮我参谋一下',
    ],
  },
  {
    label: '感觉衣服买大了',
    type: '细节',
    reply: ['女生说衣服大了，你可以说这段时间下来你瘦了吧'],
  },
  {
    label: '亲',
    type: '爱',
    reply: ['你知道白雪公主为什么要被亲才会醒吗', '你闭上眼睛试试'],
  },
  {
    label: '我要减肥了',
    type: '回复',
    reply: ['煎饼果子、巧克力、冰激凌果冻、可乐薯片，你确定不要他们了是吗'],
  },
  {
    label: '今天天气很好亲',
    type: '回复',
    reply: ['很适合跟你牵手约会'],
  },
  {
    label: '我还不想睡',
    type: '回复',
    reply: ['哇这么通宵达旦的陪着我，这谁顶得住啊'],
  },
  {
    label: '为什么喜欢我',
    type: '喜欢',
    reply: ['喜欢你哪有那么多理由,看到你,眼睛里就容不下别人了'],
  },
  {
    label: '你觉得我是一个怎样的人',
    type: '喜欢',
    reply: ['你这么在意我的看法啊'],
  },
  {
    label: '最美的风景在书上，还有你的眼里',
    type: '经典语句',
    reply: [],
  },
  {
    label: '喜欢或许是一阵风，而爱却是细说长流',
    type: '经典语句',
    reply: [],
  },
  {
    label: '用5年的时间学会了说话，却用一辈子的时间学会了闭嘴',
    type: '经典语句',
    reply: [],
  },
  {
    label: '如何开场',
    type: '开场白',
    reply: ['欢迎回家', '那就留下别走了，家里舒适'],
  },
  {
    label: '你还会做饭啊',
    type: '吃饭',
    reply: ['如果你表现好的话，不介意让你尝尝我的厨艺'],
  },
  {
    label: '发了一张美食照片',
    type: '拍照',
    reply: ['看得我都饿了', '你最喜欢哪一个菜啊'],
  },
];

// 标签颜色
const typeAndColor = [
  {
    type: '喜欢',
    color: '#ff6767',
  },
  {
    type: '爱',
    color: '#ec0707',
  },
  {
    type: '愤怒',
    color: '#ff8827',
  },
  {
    type: '伤心',
    color: '#275dff',
  },
  {
    type: '拍照',
    color: '#8b9b38',
  },
  {
    type: '开场白',
    color: '#435ac4',
  },
  {
    type: '细节',
    color: 'red',
  },
  {
    type: '开心',
    color: '#f2ff43',
  },
  {
    type: '无聊',
    color: '#ff4382',
  },
  {
    type: '吃饭',
    color: '#befea0',
  },
  {
    type: '经典语句',
    color: '#43b3c4',
  },
  {
    type: '回复',
    color: '#9b43ff',
  },
  {
    type: '话题',
    color: '#428c81',
  },
];

const HomePage: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(demo || []);

  // 每一项
  const ContentItem = (props: any) => {
    const { data } = props;
    return (
      <div className={styles.item}>
        <p className={styles.tag}>
          <span className={styles.tip}>类型：</span>
          <Tag
            color={typeAndColor.find((item) => item.type === data?.type)?.color}
          >
            {data?.type}
          </Tag>
        </p>
        <div className={styles.itemLabel}>
          {/* 所有对话 */}
          <p className={styles.itemLabel}>
            <span className={styles.tip}>问题：</span>
            <span className={styles.itemContent}>{data?.label}</span>
          </p>
          <div className={styles.itemLabel}>
            {data?.reply?.length > 0 && (
              <>
                <span className={styles.tip}>答案：</span>
                <ol>
                  {data?.reply?.map((item: string, index: number) => {
                    return (
                      <li key={index} className={styles.answers}>
                        {item}
                      </li>
                    );
                  })}
                </ol>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const findDataWithKeywordAndType = (
    data: typeof demo,
    keyword: string,
    type: string,
  ) => {
    return data.filter(
      (item) =>
        (keyword ? item.label.includes(keyword) : true) &&
        (type ? item.type === type : true),
    );
  };

  const onFinish = (values: any) => {
    if (!Object.values(values).filter(Boolean)?.length) {
      setData(demo);
      return;
    }
    const matchedData = findDataWithKeywordAndType(
      demo,
      values.keyword,
      values.type,
    );
    setData(matchedData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Form layout="horizontal" name="basic" form={form} onFinish={onFinish}>
          <Form.Item label="问题关键词" name="keyword">
            <Input placeholder="请输入问题关键词" allowClear />
          </Form.Item>
          <Form.Item label="类型" name="type">
            <Select placeholder="请选择类型" allowClear showSearch>
              {typeAndColor.map((item, index) => (
                <Option key={index} value={item.type}>
                  {item.type}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              className={styles.searchBtn}
              type="primary"
              htmlType="submit"
            >
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.content}>
        {data?.map((item, index) => (
          <ContentItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
