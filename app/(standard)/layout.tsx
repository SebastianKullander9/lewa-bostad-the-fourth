import Header from "@/components/ui/header/desktop/Header";
import SiteShell from "@/components/ui/SiteShell";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SiteShell>
            <Header />
            {children}
        </SiteShell>
    );
}
