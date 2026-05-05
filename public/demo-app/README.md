# Demo app bundle slot

Place the built Metraly UI demo bundle in this directory.

Expected structure after copying a bundle:

```text
public/demo-app/
  index.html
  assets/
    ...
```

The website demo gateway links to:

```text
/demo-app/
/demo-app/#/dash-cto
/demo-app/#/dash-vp
/demo-app/#/dash-tl
/demo-app/#/dash-devops
/demo-app/#/dash-ic
/demo-app/#/dash-wizard
/demo-app/#/metrics
/demo-app/#/ai
/demo-app/#/plugins
/demo-app/#/wizard
```

If the demo app is built with Vite, build it with base path:

```text
/demo-app/
```

Example Vite config:

```ts
export default defineConfig({
  base: "/demo-app/",
});
```

Only keep this README in git. The generated bundle should stay untracked unless intentionally released.
