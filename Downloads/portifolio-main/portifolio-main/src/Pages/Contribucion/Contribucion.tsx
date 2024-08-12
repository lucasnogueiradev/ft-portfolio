import React, { useEffect, useState } from "react";
import { Text } from "../../components/Texts/Texts";
import * as S from "./styles";
import VideoCard from "./VideoCard";
// import { API_KEY, PLAYLIST_ID } from "../../apiConfig";
const API_KEY = "AIzaSyB2DTo9ZHM5hqE6lVoEbE5TkKFD6rNVfQE";
const PLAYLIST_ID = "PLZ0HSMC7C-o_rVrDWIiKPuZnrG1siGava";

const MainLayout: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [displayedVideos, setDisplayedVideos] = useState<any[]>([]);

  const fetchVideos = async (pageToken?: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${API_KEY}&maxResults=50${
          pageToken ? `&pageToken=${pageToken}` : ""
        }`
      );
      const data = await response.json();
      console.log("Fetched Data:", data);

      const uniqueItems = Array.from(
        new Set(data.items.map((item: { id: string }) => item.id))
      );
      if (uniqueItems.length !== data.items.length) {
        console.warn("Duplicate items detected in API response");
      }
      setVideos((prevVideos) => {
        const newVideos = [...prevVideos, ...data.items];
        return Array.from(new Set(newVideos.map((item) => item.id))).map((id) =>
          newVideos.find((item) => item.id === id)
        );
      });

      setNextPageToken(data.nextPageToken || null);

      setDisplayedVideos((prev) => {
        const displayedVideos = showAll ? [...prev] : [...prev].slice(0, 5);
        console.log("Displayed Videos:", displayedVideos);
        return displayedVideos;
      });
    } catch (err) {
      setError("Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken);
    }
  };
  const handleShowAll = () => {
    setShowAll(true);
    setDisplayedVideos(videos);
  };

  return (
    <S.Layout>
      <S.Header>
        <S.Title>Minhas Contribuições no Youtube</S.Title>
        <Text
          size="small"
          text="Tenho o prazer de compartilhar minha contribuição para a comunidade de desenvolvimento. Criei um curso completo de Desenvolvimento Web, que disponibilizei gratuitamente no YouTube"
        />
      </S.Header>
      <S.MainContent>
        {loading && <S.Loading>Loading...</S.Loading>}
        {error && <S.Error>{error}</S.Error>}
        <S.VideoGrid showAll={showAll}>
          {videos.map((video: any) => (
            <VideoCard
              key={video.snippet.resourceId.videoId}
              videoId={video.snippet.resourceId.videoId}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.medium.url}
            />
          ))}
        </S.VideoGrid>
        {nextPageToken && !loading && (
          <button onClick={loadMoreVideos}>Load More</button>
        )}
      </S.MainContent>
      <S.StyledButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Mostrar Menos" : "Mostrar Mais"}
      </S.StyledButton>
    </S.Layout>
  );
};

export default MainLayout;
