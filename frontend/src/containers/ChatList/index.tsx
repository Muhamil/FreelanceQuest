import { styled } from "styled-components";

const InputStyled = styled.div`
  position: relative;

  .input-container {
        width: 100%;
        height: 100%;
        border: 1px solid #d9d9d9;
        border-radius: 10px;
        overflow: hidden;
        outline: none;

    .input {
        outline: none;
        padding: 15px;
        border: none;
        width: 100%;
        height: 100%;

        &::placeholder {
            color: #9dafbd;
        }
  }
`;

const StyledChatListRow = styled.div`
    padding: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
        background: var(--black60);
        color: var(--white);
    }
`;

const ChatList = () => {

    const sampleChatListData = [
        {username: "ubaidrmn", displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s", status: "online"},
        {username: "ubaidrmn", displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s", status: "online"},
        {username: "ubaidrmn", displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s", status: "online"},
        {username: "ubaidrmn", displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s", status: "online"},
        {username: "ubaidrmn", displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s", status: "online"},
        {username: "ubaidrmn", displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s", status: "online"},
        {username: "ubaidrmn", displayPicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Fs8Arl_LnQwQ8ppF4IpZJ88JMXu4SHf7iFLcKQtUqg&s", status: "online"},
    ]

    return (
        <div style={{
            height: "100%",
            maxHeight: "100%",
            maxWidth: "100%",
            width: "100%",
            backgroundColor: "var(--grey-light)",
        }}>
            <div style={{
                padding: "30px",
            }}>
                <p style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    marginBottom: "30px",
                }}>Chats</p>
                <InputStyled>
                    <div className="input-container">
                        <input className="input" placeholder="Search" />
                    </div>
                </InputStyled>
            </div>
            {sampleChatListData.map(user =>
                <StyledChatListRow className="flex">
                    <img style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "20px",
                        borderRadius: "100%"
                    }} src={user.displayPicture} />
                    <div className="flex-col">
                        <p className="text-xl" style={{color: "var(--green-dark)"}}>{user.username}</p>
                        <p className="text-sm">{user.status}</p>
                    </div>
                </StyledChatListRow>
            )}
        </div>
    );
}

export default ChatList;
