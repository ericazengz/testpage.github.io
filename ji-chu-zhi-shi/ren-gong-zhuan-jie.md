---
description: 由于机器人无法满足全部用户的需求，因此您可以在需要的时机将bot转接给人工客服。
---

# 人工客服转接

### 场景预览

当用户与bot聊天时，遇到无法解决的问题，点击联系客服，bot就会将处理权移交给人工客服平台。

![](../.gitbook/assets/image%20%2851%29.png)

那么，下面我们就来看一下如何完成配置吧~

## 配置方法 <a id="pei-zhi-fang-fa"></a>

首先我们需要来到Facebook粉丝页的设置界面，配置粉丝页的APP移交管理权

![](../.gitbook/assets/image%20%2828%29.png)

![](../.gitbook/assets/image%20%2868%29.png)

将主要接收器改成Meetbot, 次要接收器改成Facebook自带的Page Inbox收件箱。

![](../.gitbook/assets/image%20%2849%29.png)

然后来到Meetbot平台进行第二步配置，找到【系统内容】- 【切换到人工服务】，\[对话控制权传递给\] 设置为Page Inbox。

![](../.gitbook/assets/image%20%2838%29.png)

最后，在【自定义内容】中配置切换人工的消息内容。可以用随机回复插件调取刚才设置的 【切换到人工服务】。

![](../.gitbook/assets/image%20%2888%29.png)

之后就可以在按钮或关键字回复中使用配置的内容块转接人工啦。

 

![](../.gitbook/assets/image%20%2818%29.png)

![](../.gitbook/assets/image%20%2855%29.png)

### 如何切换回Meetbot机器人应答？

当人工客服在Page Inbox中完成对用户的解答后，点击右上方的【移到“已完成”】，对话控制权就会移交给bot啦。

![](../.gitbook/assets/image%20%2846%29.png)

