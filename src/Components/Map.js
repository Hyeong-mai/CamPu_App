import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 100%; // 맵 컨테이너의 크기를 조정하세요
`;

const Map = ({ setVal, setOpen }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e7786162388557f11d317f275d81f71d&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapContainerRef.current;
        const options = {
          center: new window.kakao.maps.LatLng(
            37.208742400000126,
            126.97238745393786
          ), // 초기 중심 좌표
          level: 7, // 초기 줌 레벨
        };
        const map = new window.kakao.maps.Map(container, options);

        const positions = [
          { lat: 37.26589629999874, lng: 126.99553785393461, title: "수원역" }, // 위치 1
          { lat: 37.20684889999933, lng: 127.02907875393599, title: "병점역" }, // 위치 2
          { lat: 37.24963699999852, lng: 126.97608935393367, title: "고색역" }, // 위치 3
          {
            lat: 37.24348640000034,
            lng: 126.95993675393534,
            title: "오목천역",
          }, // 위치 4
        ];
        positions.forEach((pos) => {
          // 각 위치에 마커 생성
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도 객체
            position: new window.kakao.maps.LatLng(pos.lat, pos.lng),
          });

          window.kakao.maps.event.addListener(marker, "click", function () {
            setVal(pos.title); // 클릭 시 해당 마커의 타이틀 표시
            setOpen(true);
          });
          // 추가적인 마커 설정은 여기서 진행...
        });
        // 여기에 추가적인 맵 설정을 추가할 수 있습니다.
      });
    };
  }, [setVal, setOpen]);

  return <MapContainer ref={mapContainerRef} />;
};

export default Map;
