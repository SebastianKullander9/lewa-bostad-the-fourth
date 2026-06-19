import { Suspense } from "react";

export default function UnderpageLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <>
            <Suspense>{children}</Suspense>
            <Suspense>{modal}</Suspense>
        </>
    );
}
