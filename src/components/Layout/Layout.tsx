import { Header } from '..';

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};
