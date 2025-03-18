import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children, title, description }) {
  const router = useRouter();
  const isMemberPage = router.pathname.startsWith('/members');
  
  return (
    <>
      <Head>
        <title>{title ? `${title} | Finanza Zuid` : 'Finanza Zuid - CFO Network'}</title>
        <meta name="description" content={description || 'Finanza Zuid - The premier network for Chief Financial Officers in the Netherlands'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* SEO tags */}
        <meta property="og:title" content={title ? `${title} | Finanza Zuid` : 'Finanza Zuid - CFO Network'} />
        <meta property="og:description" content={description || 'Finanza Zuid - The premier network for Chief Financial Officers in the Netherlands'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://finanzazuid.nl${router.asPath}`} />
        <meta property="og:image" content="https://finanzazuid.nl/images/og-image.jpg" />
        
        <meta name="keywords" content="CFO networking, finance leadership, financial executives, CFO community, Netherlands finance" />
      </Head>
      
      <Header isMemberPage={isMemberPage} />
      
      <main className={isMemberPage ? 'member-layout' : 'public-layout'}>
        {children}
      </main>
      
      <Footer isMemberPage={isMemberPage} />
    </>
  );
}