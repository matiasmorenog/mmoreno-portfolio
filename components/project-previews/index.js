import NexusApparelPreview from "./NexusApparelPreview";
import RochaCotizadorPreview from "./RochaCotizadorPreview";

export const projectPreviewComponents = {
  "nexus-apparel": NexusApparelPreview,
  "rocha-cotizador": RochaCotizadorPreview,
};

export function getProjectPreviewComponent(previewKey) {
  return previewKey ? projectPreviewComponents[previewKey] : null;
}
