import { Page, Section, Skeleton, SkeletonCard, Grid } from "@/components/ui/primitives";

export default function Loading() {
  return (
    <Page>
      <Section>
        <div style={{ display: "grid", gap: 18, maxWidth: 720 }}>
          <Skeleton style={{ width: 140, height: 12 }} />
          <Skeleton style={{ width: "72%", height: 64, borderRadius: 20 }} />
          <Skeleton style={{ width: "88%", height: 18 }} />
          <Skeleton style={{ width: "64%", height: 18 }} />
        </div>
      </Section>

      <Section tone="surface">
        <Grid columns={3}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </Grid>
      </Section>
    </Page>
  );
}
