import { useEffect, useRef } from "react";
import styles from "./KakaoMap.module.scss";

export default function KaKaoMap({ posX, posY }: kakao_positions) {
    const { kakao }: any = window;

    const mapRef = useRef<any>();

    useEffect(() => {
        if (!mapRef.current) return;

        let mapOption = {
            center: new kakao.maps.LatLng(posX, posY),
            level: 3,
        };

        const map = new kakao.maps.Map(mapRef.current, mapOption);

        const markerPosition = new kakao.maps.LatLng(posX, posY);

        const marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setMap(map);
    }, [mapRef, posX, posY, kakao.maps.LatLng, kakao.maps.Map, kakao.maps.Marker]);

    return <div ref={mapRef} className={styles.mapBox} />
}