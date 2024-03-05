import React, { useState } from "react";
import DesktopSideNav from "../components/Navbar/DesktopSideNav";
import TopNav from "../components/Navbar/TopNav";
import {
  HomePagePostsContainer,
  Card,
  Container,
  MainContainer,
  TrendingContainer,
  UserAvatar,
  UserAvatarContainer,
  UserAvatarHelper,
  Text2,
  TrendingCard,
  Title2,
  Text3,
  Title3,
  Text4,
  Text5,
  PostCard,
  ImageAvatar,
  PostImage,
  MyCarousel,
} from "../components/Styles/StyledUIComponents";
import Img1 from "/images/Img1.png";
import AddPostIcon from "/images/AddPostIcon.png";
import Trending1 from "/images/Trending1.png";
import VerifyIcon from "/images/VerifyIcon.png";
import PostBuyIcon from "/images/PostBuyIcon.png";
import PostBookmark from "/images/PostBookmark.png";
import PostMenu from "/images/PostMenu.png";
import PostImg1 from "/images/PostImg1.png";
import PostImg2 from "/images/PostImg2.png";
import PostHeart from "/images/PostHeart.png";
import PostComment from "/images/PostComment.png";
import PostShare from "/images/PostShare.png";
import Repost from "/images/Repost.png";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import PostOpenModal from "../components/modals/PostOpenModal";
import PostDonateModal from "../components/modals/PostDonateModal";
import { isMobile } from "react-device-detect";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = () => {
  const [commentModal, setCommentModal] = useState(false);
  const [donateModal, setDonateModal] = useState(false);
  const handleCommentModalOpen = () => setCommentModal(true);
  const handleCommentModalClose = () => setCommentModal(false);
  const handleDonateModalOpen = () => {
    setCommentModal(false);
    setDonateModal(true);
  };
  const handleDonateModalClose = () => setDonateModal(false);
  const { mode } = useSelector((state) => state.theme);

  return (
    <>
      <TopNav />
      <DesktopSideNav />
      <MainContainer>
        <PostOpenModal
          commentModal={commentModal}
          handleCommentModalClose={handleCommentModalClose}
          handleDonateModalOpen={handleDonateModalOpen}
          mode={mode}
        />
        <PostDonateModal
          donateModal={donateModal}
          handleDonateModalClose={handleDonateModalClose}
          mode={mode}
        />
        <HomePagePostsContainer>
          <Card Mobile="true">
            <Container style={{ margin: "0 12px" }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <UserAvatar
                    width="20px!important"
                    height="20px!important"
                    src={AddPostIcon}
                  />
                }
              >
                <UserAvatarContainer>
                  <UserAvatar
                    width="50px!important"
                    height="50px!important"
                    src={Img1}
                  />
                </UserAvatarContainer>
              </Badge>
              <UserAvatarHelper>Add Story</UserAvatarHelper>
            </Container>
            {num.map((item, index) => (
              <Container key={index} style={{ margin: "0 14px" }}>
                <UserAvatarContainer bc="true">
                  <UserAvatar
                    width="50px!important"
                    height="50px!important"
                    src={Img1}
                  />
                </UserAvatarContainer>
                <UserAvatarHelper>@User</UserAvatarHelper>
              </Container>
            ))}
          </Card>
          <Container width="85%" mwidth="100%">
            <PostCard onClick={handleCommentModalOpen}>
              <Container
                direction="row"
                justify="space-between"
                Mjustify="space-between"
                width="100%"
              >
                <Container direction="row">
                  <UserAvatarContainer>
                    <UserAvatar
                      width="40px!important"
                      height="40px!important"
                      src={Img1}
                    />
                  </UserAvatarContainer>
                  <Container m="0 5px" align="flex-start">
                    <Container direction="row">
                      <Title3>Natty Heavy</Title3>
                      <ImageAvatar
                        src={VerifyIcon}
                        width="18px"
                        height="18px"
                      />
                    </Container>
                    <Text4>@nattyheavy</Text4>
                  </Container>
                </Container>
                <Container
                  direction="row"
                  width="15%"
                  mwidth="28%"
                  justify="space-between"
                  Mjustify="space-between"
                >
                  <ImageAvatar
                    width="20px"
                    mheight="28px"
                    mwidth="22px"
                    src={PostBuyIcon}
                  />
                  <ImageAvatar
                    width="15px"
                    height="20px"
                    mwidth="16px"
                    mheight="22px"
                    src={PostBookmark}
                  />
                  <ImageAvatar
                    mwidth="5px"
                    width="6px"
                    height="20px"
                    src={PostMenu}
                  />
                </Container>
              </Container>
              <Text2 style={{ alignSelf: "flex-start" }}>
                See you tonight @ 11 pm
              </Text2>
              <MyCarousel
                showIndicators={false}
                showArrows={false}
                emulateTouch={true}
                showThumbs={false}
              >
                <PostImage src={PostImg1} />
                <PostImage src={PostImg2} />
              </MyCarousel>
              <Container
                direction="row"
                width="100%"
                justify="space-around"
                Mjustify="space-around"
              >
                <Container direction="row">
                  <ImageAvatar height="22px" src={PostHeart} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar src={PostComment} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar height="20px" mwidth="25px" src={Repost} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar src={PostShare} />
                  <Text5>12</Text5>
                </Container>
              </Container>
            </PostCard>
            <PostCard onClick={handleCommentModalOpen}>
              <Container
                direction="row"
                justify="space-between"
                Mjustify="space-between"
                width="100%"
              >
                <Container direction="row">
                  <UserAvatarContainer>
                    <UserAvatar
                      width="40px!important"
                      height="40px!important"
                      src={Img1}
                    />
                  </UserAvatarContainer>
                  <Container m="0 5px" align="flex-start">
                    <Container direction="row">
                      <Title3>Natty Heavy</Title3>
                      <ImageAvatar
                        src={VerifyIcon}
                        width="18px"
                        height="18px"
                      />
                    </Container>
                    <Text4>@nattyheavy</Text4>
                  </Container>
                </Container>
                <Container
                  direction="row"
                  width="15%"
                  mwidth="28%"
                  justify="space-between"
                  Mjustify="space-between"
                >
                  <ImageAvatar
                    width="20px"
                    mheight="28px"
                    mwidth="22px"
                    src={PostBuyIcon}
                  />
                  <ImageAvatar
                    width="15px"
                    height="20px"
                    mwidth="16px"
                    mheight="22px"
                    src={PostBookmark}
                  />
                  <ImageAvatar
                    mwidth="5px"
                    width="6px"
                    height="20px"
                    src={PostMenu}
                  />
                </Container>
              </Container>
              <Text2 style={{ alignSelf: "flex-start" }}>
                See you tonight @ 11 pm
              </Text2>
              <MyCarousel
                showIndicators={false}
                showArrows={false}
                emulateTouch={true}
                showThumbs={false}
              >
                <PostImage src={PostImg2} />
                <PostImage src={PostImg1} />
              </MyCarousel>
              <Container
                direction="row"
                width="100%"
                justify="space-around"
                Mjustify="space-around"
              >
                <Container direction="row">
                  <ImageAvatar height="22px" src={PostHeart} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar src={PostComment} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar height="20px" mwidth="25px" src={Repost} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar src={PostShare} />
                  <Text5>12</Text5>
                </Container>
              </Container>
            </PostCard>
            <PostCard onClick={handleCommentModalOpen}>
              <Container
                direction="row"
                justify="space-between"
                Mjustify="space-between"
                width="100%"
              >
                <Container direction="row">
                  <UserAvatarContainer>
                    <UserAvatar
                      width="40px!important"
                      height="40px!important"
                      src={Img1}
                    />
                  </UserAvatarContainer>
                  <Container m="0 5px" align="flex-start">
                    <Container direction="row">
                      <Title3>Natty Heavy</Title3>
                      <ImageAvatar
                        src={VerifyIcon}
                        width="18px"
                        height="18px"
                      />
                    </Container>
                    <Text4>@nattyheavy</Text4>
                  </Container>
                </Container>
                <Container
                  direction="row"
                  width="15%"
                  mwidth="28%"
                  justify="space-between"
                  Mjustify="space-between"
                >
                  <ImageAvatar
                    width="20px"
                    mheight="28px"
                    mwidth="22px"
                    src={PostBuyIcon}
                  />
                  <ImageAvatar
                    width="15px"
                    height="20px"
                    mwidth="16px"
                    mheight="22px"
                    src={PostBookmark}
                  />
                  <ImageAvatar
                    mwidth="5px"
                    width="6px"
                    height="20px"
                    src={PostMenu}
                  />
                </Container>
              </Container>
              <Text2 style={{ alignSelf: "flex-start" }}>
                See you tonight @ 11 pm
              </Text2>
              <MyCarousel
                showIndicators={false}
                showArrows={false}
                emulateTouch={true}
                showThumbs={false}
              >
                <PostImage src={PostImg1} />
                <PostImage src={PostImg2} />
              </MyCarousel>
              <Container
                direction="row"
                width="100%"
                justify="space-around"
                Mjustify="space-around"
              >
                <Container direction="row">
                  <ImageAvatar height="22px" src={PostHeart} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar src={PostComment} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar height="20px" mwidth="25px" src={Repost} />
                  <Text5>12</Text5>
                </Container>
                <Container direction="row">
                  <ImageAvatar src={PostShare} />
                  <Text5>12</Text5>
                </Container>
              </Container>
            </PostCard>
          </Container>
        </HomePagePostsContainer>
        {isMobile ? null : (
          <Container width={isMobile ? "100%" : "30%"}>
            <TrendingContainer>
              <Text2>Trending</Text2>
              <TrendingCard imageUrl={Trending1}>
                <UserAvatarContainer m="0 0 8px 8px!important" trending="true">
                  <UserAvatar src={Img1} />
                </UserAvatarContainer>
                <Container m="0 0 14px 8px">
                  <Title2>Natty Heavy</Title2>
                  <Text3>@nattyheavy</Text3>
                </Container>
              </TrendingCard>
              <TrendingCard imageUrl={Trending1}>
                <UserAvatarContainer m="0 0 8px 8px!important" trending="true">
                  <UserAvatar src={Img1} />
                </UserAvatarContainer>
                <Container m="0 0 14px 8px">
                  <Title2>Natty Heavy</Title2>
                  <Text3>@nattyheavy</Text3>
                </Container>
              </TrendingCard>
              <TrendingCard imageUrl={Trending1}>
                <UserAvatarContainer m="0 0 8px 8px!important" trending="true">
                  <UserAvatar src={Img1} />
                </UserAvatarContainer>
                <Container m="0 0 14px 8px">
                  <Title2>Natty Heavy</Title2>
                  <Text3>@nattyheavy</Text3>
                </Container>
              </TrendingCard>
            </TrendingContainer>
            <TrendingContainer style={{ height: "15vh" }}>
              <Text2>Suggestions</Text2>
            </TrendingContainer>
          </Container>
        )}
      </MainContainer>
      {isMobile ? null : (
        <Container width="88%" style={{ marginLeft: "10vw" }}>
          <Footer />{" "}
        </Container>
      )}
    </>
  );
};

export default Home;
