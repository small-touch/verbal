import { Button, Form, Input, Select, Tag } from 'antd';
import { useState } from 'react';
import styles from './index.less';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const { Option } = Select;
const HomePage: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  // 每一项
  const ContentItem = (props: any) => {
    const { data } = props;
    return (
      <div className={styles.item}>
        <p className={styles.tag}>
          <span className={styles.tip}>类型：</span>
          <Tag color="magenta">{data?.type}</Tag>
        </p>
        <div className={styles.itemLabel}>
          {/* 所有对话 */}
          <p className={styles.itemLabel}>
            <span className={styles.tip}>女生说：</span>
            <span className={styles.itemContent}>{data?.label}</span>
          </p>
          <p className={styles.itemLabel}>
            <span className={styles.tip}>回复：</span>
            <span className={styles.itemContent}>{data?.label}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Form
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          onValuesChange={onFormLayoutChange}
          style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
        >
          <Form.Item label="关键词">
            <Input placeholder="请输入关键词" allowClear />
          </Form.Item>
          <Form.Item label="类型">
            <Select placeholder="请选择" allowClear>
              <Option value="demo">Demo</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button className={styles.searchBtn} type="primary">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.content}>
        <ContentItem
          data={{
            label:
              '标签标签标签标签标签标签标签标签标签标签标签标签标签标签标签标签标签标签标签',
            type: '吃饭',
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
