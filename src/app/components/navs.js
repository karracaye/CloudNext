import Image from "next/image";

const Navs = () => {
  return (
    <div style={styles.navContainer} className="fixed w-screen z-50">
        <div style={styles.navContent} className="p-5 mt-10 rounded-full px-10 shadow-lg">
            <a>
            <Image
                src="/assets/images/cnlogo.png" // Path relative to the public folder
                alt="Example"
                width={100} // Specify width in pixels
                height={100} // Specify height in pixels
            />
            </a>
            <a href="#">SERVICE</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">CONTACT</a>
        </div>
    </div>
  );
};

const styles = {
    navContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navContent: {
        backgroundColor: '#ffffff',
        display: 'flex',
        gap:'70px'
    }
};


export default Navs;
