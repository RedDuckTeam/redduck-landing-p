import { useEffect } from 'react';

interface ExternalResource {
  type: 'script' | 'stylesheet';
  href: string;
}

function appendStylesheet(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

function appendScript(href: string) {
  if (document.querySelector(`script[src="${href}"]`)) return;
  const script = document.createElement('script');
  script.src = href;
  script.async = true;
  document.head.appendChild(script);
}

function loadResources(resources: ExternalResource[]) {
  for (const resource of resources) {
    const append =
      resource.type === 'stylesheet' ? appendStylesheet : appendScript;
    append(resource.href);
  }
}

export function LazyExternalResources({
  resources,
}: {
  resources: ExternalResource[];
}) {
  useEffect(() => {
    if (document.readyState === 'complete') {
      loadResources(resources);
      return;
    }

    const handler = () => loadResources(resources);
    window.addEventListener('load', handler);
    return () => window.removeEventListener('load', handler);
  }, [resources]);

  return null;
}
