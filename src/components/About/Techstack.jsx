import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPostgresql,
  DiDocker,
  DiAws,
  DiPython,
  DiJava,
  DiSass,
  DiPhp,
} from "react-icons/di";
import {
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiRedis,
  SiMysql,
  SiShopify,
  SiThreedotjs,
  SiTailwindcss,
  SiGraphql,
  SiSocketdotio,
  SiSupabase,
  SiGithubactions,
  SiKubernetes,
  SiDeno,
  SiLaravel,
  SiRedux,
  SiShadcnui,
  SiRadixui,
  SiMui,
  SiChakraui,
  SiAntdesign,
  SiJest,
  SiStorybook,
  SiFastapi,
  // AI & ML
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiMlflow,
  SiMilvus,
  // Backend / Infra
  SiApachekafka,
  SiNginx,
  SiPrisma,
  SiElasticsearch,
  // Cloud & Monitoring
  SiCloudflare,
  SiVercel,
  SiGrafana,
  SiSentry,
  SiIbm,
} from "react-icons/si";

const techIcons = [
  // Languages
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
  { icon: <DiPhp />, name: "PHP" },

  // Frontend
  { icon: <DiReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiThreedotjs />, name: "Three.js" },
  { icon: <SiRedux />, name: "Redux" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <DiSass />, name: "Sass" },
  { icon: <SiShadcnui />, name: "Shadcn UI" },
  { icon: <SiRadixui />, name: "Radix UI" },
  { icon: <SiMui />, name: "Material UI" },
  { icon: <SiChakraui />, name: "Chakra UI" },
  { icon: <SiAntdesign />, name: "Ant Design" },

  // Backend
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiNestjs />, name: "NestJS" },
  { icon: <SiDeno />, name: "Deno" },
  { icon: <SiLaravel />, name: "Laravel" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <SiGraphql />, name: "GraphQL" },
  { icon: <SiSocketdotio />, name: "Socket.IO" },

  // Databases
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <DiPostgresql />, name: "PostgreSQL" },

  // Cloud & Infrastructure
  { icon: <DiAws />, name: "AWS" },
  { icon: <SiSupabase />, name: "Supabase" },
  { icon: <DiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiGithubactions />, name: "GitHub Actions" },

  // E-commerce
  { icon: <SiShopify />, name: "Shopify" },

  // AI & LLMs
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiPandas />, name: "Pandas" },
  { icon: <SiJupyter />, name: "Jupyter Notebook" },
  { icon: <SiMlflow />, name: "MLflow" },
  { icon: <SiMilvus />, name: "Milvus (Vector DB)" },
  { icon: <img src="/qdrant.svg" alt="Qdrant" style={{ width: "1em", height: "1em" }} />, name: "Qdrant" },
  { icon: <img src="/n8n.svg" alt="n8n" style={{ width: "1em", height: "1em" }} />, name: "n8n" },

  // Backend / Infra additions
  { icon: <SiApachekafka />, name: "Apache Kafka" },
  { icon: <SiNginx />, name: "Nginx" },
  { icon: <SiPrisma />, name: "Prisma" },
  { icon: <SiElasticsearch />, name: "Elasticsearch" },

  // Cloud & Monitoring
  { icon: <SiCloudflare />, name: "Cloudflare" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiGrafana />, name: "Grafana" },
  { icon: <SiSentry />, name: "Sentry" },
  { icon: <SiIbm />, name: "IBM Cloud" },

  // Tools
  { icon: <DiGit />, name: "Git" },
  { icon: <SiJest />, name: "Jest" },
  { icon: <SiStorybook />, name: "Storybook" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map(({ icon, name }) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${name}`}>{name}</Tooltip>}
          >
            <span>{icon}</span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
