import type { DiagramNode } from "@/content/projects";
import styles from "./ArchitectureDiagram.module.css";

interface ArchitectureDiagramProps {
  /** Read by screen readers only; the diagram speaks for itself visually. */
  description: string;
  clients: DiagramNode[];
  api: DiagramNode;
  database: DiagramNode;
  services: DiagramNode[];
}

function Node({ node, variant = "default" }: { node: DiagramNode; variant?: "default" | "core" | "service" }) {
  return (
    <div className={`${styles.node} ${styles[variant]}`}>
      <span className={styles.nodeTitle}>{node.title}</span>
      <span className={styles.nodeDetail}>{node.detail}</span>
    </div>
  );
}

function Connector() {
  return <span className={styles.connector} aria-hidden="true" />;
}

/** Clients → REST API → PostgreSQL, with third-party services beside the API. Built in CSS. */
export function ArchitectureDiagram({ description, clients, api, database, services }: ArchitectureDiagramProps) {
  return (
    <div className={styles.diagram} role="img" aria-label={description}>
      <div className={styles.row}>
        {clients.map((client) => (
          <Node key={client.title} node={client} />
        ))}
      </div>
      <Connector />
      <div className={styles.middle}>
        <Node node={api} variant="core" />
        <div className={styles.services}>
          {services.map((service) => (
            <Node key={service.title} node={service} variant="service" />
          ))}
        </div>
      </div>
      <Connector />
      <div className={styles.row}>
        <Node node={database} />
      </div>
    </div>
  );
}
