import { PaperClipOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, List, Row, Statistic, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

const noticeData = [
  'Racing car sprays burning.',
  'Japanese princess to wed commoner.',
  'Los Angeles battles huge wildfires.'
]


const Home = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    fetch(
      "https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...body.results]);
      })
      .catch(() => {});
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Card style={{ width: "100%", height: "100%",overflow:'auto' }}>
        <Title style={{ marginTop: 0 }} level={3}>
          {" "}
          👋 {t("Hello")}Prokit
        </Title>
        <Row gutter={6}>
          <Col span={12}>
            <Card bodyStyle={{height:'150px'}} title={t('Event')} style={{ marginBottom: "10px" }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic
                    title={t('Done')}
                    valueStyle={{ color: "green" }}
                    value={1211}
                  />
                </Col>
                <Col span={12}>
                  <Statistic title={t('Untreated')} value={12} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card bodyStyle={{height:'150px'}} title={t('Notice')} style={{ marginBottom: "10px" }}>
            <List
              size="small"
              dataSource={noticeData}
              renderItem={(item) => <List.Item>
                {item}
                <PaperClipOutlined style={{color:"#69b1ff"}}/>
              </List.Item>}
            />
            </Card>
          </Col>
        </Row>

        <Card title={t('Recent Contacts')}>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          />
        </Card>
      </Card>
    </div>
  );
};

export default Home;
