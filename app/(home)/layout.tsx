import SiteShell from "@/components/ui/SiteShell";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <SiteShell>{children}</SiteShell>;
}
