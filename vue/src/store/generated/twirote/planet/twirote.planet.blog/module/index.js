// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSentPost } from "./types/blog/tx";
import { MsgDeleteSentPost } from "./types/blog/tx";
import { MsgCreateTimedoutPost } from "./types/blog/tx";
import { MsgCreatePost } from "./types/blog/tx";
import { MsgUpdatePost } from "./types/blog/tx";
import { MsgDeleteTimedoutPost } from "./types/blog/tx";
import { MsgUpdateSentPost } from "./types/blog/tx";
import { MsgUpdateTimedoutPost } from "./types/blog/tx";
import { MsgDeletePost } from "./types/blog/tx";
const types = [
    ["/twirote.planet.blog.MsgCreateSentPost", MsgCreateSentPost],
    ["/twirote.planet.blog.MsgDeleteSentPost", MsgDeleteSentPost],
    ["/twirote.planet.blog.MsgCreateTimedoutPost", MsgCreateTimedoutPost],
    ["/twirote.planet.blog.MsgCreatePost", MsgCreatePost],
    ["/twirote.planet.blog.MsgUpdatePost", MsgUpdatePost],
    ["/twirote.planet.blog.MsgDeleteTimedoutPost", MsgDeleteTimedoutPost],
    ["/twirote.planet.blog.MsgUpdateSentPost", MsgUpdateSentPost],
    ["/twirote.planet.blog.MsgUpdateTimedoutPost", MsgUpdateTimedoutPost],
    ["/twirote.planet.blog.MsgDeletePost", MsgDeletePost],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgCreateSentPost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgCreateSentPost", value: data }),
        msgDeleteSentPost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgDeleteSentPost", value: data }),
        msgCreateTimedoutPost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgCreateTimedoutPost", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgCreatePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgUpdatePost", value: data }),
        msgDeleteTimedoutPost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgDeleteTimedoutPost", value: data }),
        msgUpdateSentPost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgUpdateSentPost", value: data }),
        msgUpdateTimedoutPost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgUpdateTimedoutPost", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/twirote.planet.blog.MsgDeletePost", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
