import { useRouter } from 'next/router';

export default function Room() {
    const router = useRouter();
    console.log('router:', router);
    return <p>Room: {router.query.roomId}</p>;
}
