import { alertApiRef, useApi } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';
import { EmbeddableWorkflow } from '@backstage/plugin-scaffolder-react/alpha';
import { stringifyEntityRef } from '@backstage/catalog-model';
import { useMemo } from 'react';

export function EditComponent() {
  const alertApi = useApi(alertApiRef);
  const { entity } = useEntity();

  const initialState = useMemo(
    () => ({
      owner: stringifyEntityRef(entity),
      description: entity?.metadata?.description ?? '',
    }),
    [entity],
  );
  return (
    <EmbeddableWorkflow
      initialState={initialState}
      namespace="default"
      templateName="edit-component"
      onError={error => (
        <span>Something went wrong {error?.message || 'Unknown'}</span>
      )}
      extensions={[]}
      onCreate={async _ => alertApi.post({ message: 'updated' })}
    />
  );
}
