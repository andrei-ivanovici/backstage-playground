import {
  ConfigContent,
  ExternalDependenciesContent,
  InfoContent,
  DevToolsLayout,
} from '@backstage/plugin-devtools';
import { UnprocessedEntitiesContent } from '@backstage/plugin-catalog-unprocessed-entities';

export const DevToolsCustomPage = () => {
  return (
    <DevToolsLayout>
      <DevToolsLayout.Route path="info" title="Info">
        <InfoContent />
      </DevToolsLayout.Route>
      <DevToolsLayout.Route path="config" title="Config">
        <ConfigContent />
      </DevToolsLayout.Route>
      <DevToolsLayout.Route
        path="external-dependencies"
        title="External Dependencies"
      >
        <ExternalDependenciesContent />
      </DevToolsLayout.Route>
      <DevToolsLayout.Route
        path="unprocessed-entities"
        title="Unprocessed Entities"
      >
        <UnprocessedEntitiesContent />
      </DevToolsLayout.Route>
    </DevToolsLayout>
  );
};
