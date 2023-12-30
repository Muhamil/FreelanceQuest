// @ts-nocheck

import { useState } from "react";

// React Icons
import { FaPen } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

// Styled
import {
  ProfileContainerContent,
  ProfileContainerStyled,
  ProfileContainerWrapper,
  ProfileContentLeft,
  ProfileContentPartition,
  ProfileContentRight,
  ProfileContentRightHistory,
  ProfileContentRightInfo,
  UploadProfilePictureLabelStyled,
} from "./styled";

// Components
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import ReviewCard from "@/components/common/ReviewCard";

// Utils
import { useAppDispatch, useAppSelector } from "@/utils/hooks/store";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { updateProfilePictureThunk } from "@/store/thunks/userThunk";
import Swal from "sweetalert2";

const ProfileContainer: React.FC = () => {
  const [lineClamp, setLineClamp] = useState(8);
  const session = useSession();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const uploadProfilePicture = (e) => {
    const fileInput = e.target;
    const file = fileInput.files[0];

    if (file && session.data) {
      const formData = new FormData();
      formData.append('user_id', session.data.user.id);
      formData.append('profile_picture', file);
      dispatch(updateProfilePictureThunk(formData));
    }
  }

  return (
    <ProfileContainerStyled>
      <Container>
        <ProfileContainerWrapper>
          <div className="border-b-2 max-w-[145px]">
            <h1 className="font-poppins text-2xl font-bold text-slate-600 py-2">
              User Profile
            </h1>
          </div>

          <ProfileContainerContent>
            <div className="flex items-center justify-between border-b-2 pb-16 border-stone-300">
              <div className="flex items-center gap-[18px]">
                <div className="w-[190px] h-[190px] rounded-[50%] overflow-hidden flex items-center justify-center bg-slate-200 shadow-profile-image">
                  <Image
                    src={user?.profileImage || ""}
                    alt="Dummy"
                    className="w-[170px] h-[170px] object-cover rounded-[50%]"
                    width={170}
                    height={170}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h2 className="font-montserrat text-2xl font-bold text-slate-600">
                    {user?.firstName} {user?.lastName}
                  </h2>
                  <h6 className="font-montserrat text-xl text-slate-600">
                    Product Design
                  </h6>
                  <p className="text-gray-500 text-lg font-normal font-montserrat">
                    Eastern European Time (EET), Cairo UTC +3
                  </p>
                  <div className="flex items-center gap-4">
                    <p className="text-gray-500 text-lg font-medium font-montserrat">
                      ${user?.hourlyRate}/hr
                    </p>
                    <i className="cursor-pointer text-green-500">
                      <FaPen />
                    </i>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-14">
                <div className="btns">
                  <input id="profile-picture-input" onChange={uploadProfilePicture} style={{ display: "none" }} type="file" />
                  <UploadProfilePictureLabelStyled for="profile-picture-input">Upload New Photo</UploadProfilePictureLabelStyled>
                </div>
                <div className="btns">
                  <Button variant="grey-transparent">Delete</Button>
                </div>
              </div>
            </div>

            <ProfileContentPartition className="flex">
              <ProfileContentLeft className="w-1/3 h-full">
                <div className="flex items-center justify-around  border-b-2 border-stone-300 w-full px-4 pb-4">
                  <div className="flex items-center flex-col">
                    <h3 className="font-montserrat font-medium text-2xl text-black">
                      $3k+
                    </h3>
                    <p className="text-black text-lg font-base font-montserrat">
                      Total earnings
                    </p>
                  </div>
                  <div className="flex items-center flex-col">
                    <h3 className="font-montserrat font-medium text-2xl text-black">
                      5
                    </h3>
                    <p className="text-black text-lg font-base font-montserrat">
                      Total jobs
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-full px-4 pt-4">
                  <h3 className="font-montserrat font-medium text-2xl text-black text-left">
                    Languages
                  </h3>

                  <ul className="mt-4 flex flex-col gap-2">
                    {user?.languages.map((language, _index) => (
                      <li key={_index}>
                        <p className="text-black text-lg font-normal font-montserrat">
                          {language}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ProfileContentLeft>

              <ProfileContentRight className="w-full">
                <ProfileContentRightInfo>
                  <div>
                    <h2
                      className="font-poppins text-3xl font-bold text-slate-600"
                      style={{ marginBottom: "1.5rem" }}
                    >
                      {user?.title}
                    </h2>
                  </div>
                  <div>
                    <p
                      className={`font-montserrat text-lg text-slate-600`}
                      style={{
                        WebkitLineClamp: lineClamp,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        display: "-webkit-box",
                        lineClamp: lineClamp,
                      }}
                    >
                      {user?.description}
                    </p>

                    <span
                      className="cursor-pointer font-montserrat text-lg font-medium text-green-500 underline"
                      onClick={() => setLineClamp(lineClamp === 0 ? 8 : 0)}
                    >
                      {lineClamp === 0 ? "less" : "more"}
                    </span>
                  </div>
                </ProfileContentRightInfo>

                <ProfileContentRightHistory>
                  <h2
                    className="font-poppins text-3xl font-bold text-slate-600 border-b-2 max-w-[190px] pb-3"
                    style={{ marginBottom: "1.5rem" }}
                  >
                    Work history
                  </h2>

                  <div className="flex items-center gap-3">
                    <p className="font-poppins text-lg text-gray-500  font-bold">
                      11 reviews
                    </p>
                    <div className="flex items-center gap-2">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <i className="text-green-500" key={i}>
                            <FaStar />
                          </i>
                        ))}
                      <p className="font-poppins text-lg text-gray-500  font-bold">
                        (5)
                      </p>
                    </div>
                  </div>

                  <hr className="my-5 text-grey-800 h-1" />

                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <ReviewCard key={i} />
                    ))}
                </ProfileContentRightHistory>
              </ProfileContentRight>
            </ProfileContentPartition>
          </ProfileContainerContent>
        </ProfileContainerWrapper>
      </Container>
    </ProfileContainerStyled>
  );
};

export default ProfileContainer;
