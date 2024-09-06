import{_ as a,o as n,c as l,x as s,a as e,N as p}from"./chunks/framework.0ff2fc97.js";const o="/assets/example-1.e4b42c00.png",r="/assets/example-2.70198a82.png",t="/assets/example-3.09e259b3.png",c="/assets/example-0.3db888ef.png",C=JSON.parse('{"title":"Metaso AI Free 服务","description":"","frontmatter":{},"headers":[],"relativePath":"freeapi/metaso/index.md","lastUpdated":1717213004000}'),i={name:"freeapi/metaso/index.md"},D=s("h1",{id:"metaso-ai-free-服务",tabindex:"-1"},[e("Metaso AI Free 服务 "),s("a",{class:"header-anchor",href:"#metaso-ai-free-服务","aria-label":'Permalink to "Metaso AI Free 服务"'},"​")],-1),y=s("iframe",{src:"https://udify.app/chatbot/46rRHl5xoVa4m1lo",style:{width:"100%",height:"100%","min-height":"700px"},frameborder:"0",allow:"microphone"},null,-1),d=p('<hr><p><img src="https://img.shields.io/github/stars/llm-red-team/metaso-free-api.svg" alt=""><img src="https://img.shields.io/github/forks/llm-red-team/metaso-free-api.svg" alt=""><img src="https://img.shields.io/docker/pulls/vinlic/metaso-free-api.svg" alt=""></p><p>支持高速流式输出、支持秘塔 AI 超强联网搜索（全网 or 学术以及简洁、深入、研究三种模式），零配置部署，多路 token 支持。</p><p>与 ChatGPT 接口完全兼容。</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#免责声明">免责声明</a></li><li><a href="#在线体验">在线体验</a></li><li><a href="#测试接口">测试接口</a></li><li><a href="#效果示例">效果示例</a></li><li><a href="#接入准备">接入准备</a><ul><li><a href="#多账号接入">多账号接入</a></li></ul></li><li><a href="#Docker部署">Docker 部署</a><ul><li><a href="#Docker-compose部署">Docker-compose 部署</a></li></ul></li><li><a href="#Render部署">Render 部署</a></li><li><a href="#Vercel部署">Vercel 部署</a></li><li><a href="#原生部署">原生部署</a></li><li><a href="#推荐使用客户端">推荐使用客户端</a></li><li><a href="#接口列表">接口列表</a><ul><li><a href="#对话补全">对话补全</a></li><li><a href="#token存活检测">token 存活检测</a></li></ul></li><li><a href="#注意事项">注意事项</a><ul><li><a href="#Nginx反代优化">Nginx 反代优化</a></li><li><a href="#Token统计">Token 统计</a></li></ul></li><li><a href="#star-history">Star History</a></li></ul><h2 id="免责声明" tabindex="-1">免责声明 <a class="header-anchor" href="#免责声明" aria-label="Permalink to &quot;免责声明&quot;">​</a></h2><p><strong>逆向 API 是不稳定的，建议前往秘塔 AI 官方 <a href="https://metaso.cn/" target="_blank" rel="noreferrer">https://metaso.cn/</a> 使用，避免封禁的风险。</strong></p><p><strong>本组织和个人不接受任何资金捐助和交易，此项目是纯粹研究交流学习性质！</strong></p><p><strong>仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！</strong></p><p><strong>仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！</strong></p><p><strong>仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！</strong></p><h2 id="在线体验" tabindex="-1">在线体验 <a class="header-anchor" href="#在线体验" aria-label="Permalink to &quot;在线体验&quot;">​</a></h2><p>此链接仅临时测试功能，如果遇到异常请稍后重试，建议自行部署使用。</p><p><a href="https://udify.app/chat/46rRHl5xoVa4m1lo" target="_blank" rel="noreferrer">https://udify.app/chat/46rRHl5xoVa4m1lo</a></p><h2 id="效果示例" tabindex="-1">效果示例 <a class="header-anchor" href="#效果示例" aria-label="Permalink to &quot;效果示例&quot;">​</a></h2><h3 id="三种搜索模式-简洁、深入、研究" tabindex="-1">三种搜索模式（简洁、深入、研究） <a class="header-anchor" href="#三种搜索模式-简洁、深入、研究" aria-label="Permalink to &quot;三种搜索模式（简洁、深入、研究）&quot;">​</a></h3><p><img src="'+o+'" alt="简洁和深入搜索模式"></p><p><img src="'+r+'" alt="研究搜索模式"></p><h3 id="dify-工作流妙用" tabindex="-1">Dify 工作流妙用 <a class="header-anchor" href="#dify-工作流妙用" aria-label="Permalink to &quot;Dify 工作流妙用&quot;">​</a></h3><p><img src="'+t+'" alt="Dify工作流妙用"></p><h2 id="接入准备" tabindex="-1">接入准备 <a class="header-anchor" href="#接入准备" aria-label="Permalink to &quot;接入准备&quot;">​</a></h2><p>从 <a href="https://metaso.cn/" target="_blank" rel="noreferrer">秘塔 AI 搜索</a> 获取<code>uid</code>和<code>sid</code>并使用<code>-</code>拼接：</p><p>进入秘塔 AI 搜索，登录账号（<strong>建议登录账号，否则可能遭遇奇怪的限制</strong>），然后 F12 打开开发者工具，从 Application &gt; Cookies 中找到<code>uid</code>和<code>sid</code>的值。</p><p>将 uid 和 sid 拼接：<code>uid-sid</code>，如 <code>65e91a6b2bac5b600dd8526a-5e7acc465b114236a8d9de26c9f41846</code>。</p><p>这将作为 Authorization 的 Bearer Token 值：<code>Authorization: Bearer uid-sid</code></p><p><img src="'+c+`" alt="获取uid-sid"></p><h3 id="多账号接入" tabindex="-1">多账号接入 <a class="header-anchor" href="#多账号接入" aria-label="Permalink to &quot;多账号接入&quot;">​</a></h3><p><strong>注意：目前怀疑秘塔对 IP 地址的总搜索次数有限制，建议加入 IP 轮换</strong></p><p>你可以通过提供多个账号的 uid-sid 并使用<code>,</code>拼接提供：</p><p><code>Authorization: Bearer uid-sid1,uid-sid2,uid-sid3</code></p><p>每次请求服务会从中挑选一个。</p><h2 id="docker-部署" tabindex="-1">Docker 部署 <a class="header-anchor" href="#docker-部署" aria-label="Permalink to &quot;Docker 部署&quot;">​</a></h2><p>请准备一台具有公网 IP 的服务器并将 8000 端口开放。</p><p>拉取镜像并启动服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--init</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">8000</span><span style="color:#C3E88D;">:8000</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">TZ=Asia/Shanghai</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vinlic/metaso-free-api:latest</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看服务实时日志</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">logs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>停止服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="docker-compose-部署" tabindex="-1">Docker-compose 部署 <a class="header-anchor" href="#docker-compose-部署" aria-label="Permalink to &quot;Docker-compose 部署&quot;">​</a></h3><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">metaso-free-api</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vinlic/metaso-free-api:latest</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8000:8000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">TZ=Asia/Shanghai</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="render-部署" tabindex="-1">Render 部署 <a class="header-anchor" href="#render-部署" aria-label="Permalink to &quot;Render 部署&quot;">​</a></h3><p><strong>注意：部分部署区域可能无法连接 metaso，如容器日志出现请求超时或无法连接，请切换其他区域部署！</strong><strong>注意：免费账户的容器实例将在一段时间不活动时自动停止运行，这会导致下次请求时遇到 50 秒或更长的延迟，建议查看<a href="https://github.com/LLM-Red-Team/free-api-hub/#Render%E5%AE%B9%E5%99%A8%E4%BF%9D%E6%B4%BB" target="_blank" rel="noreferrer">Render 容器保活</a></strong></p><ol><li><p>fork 本项目到你的 github 账号下。</p></li><li><p>访问 <a href="https://dashboard.render.com/" target="_blank" rel="noreferrer">Render</a> 并登录你的 github 账号。</p></li><li><p>构建你的 Web Service（New+ -&gt; Build and deploy from a Git repository -&gt; Connect 你 fork 的项目 -&gt; 选择部署区域 -&gt; 选择实例类型为 Free -&gt; Create Web Service）。</p></li><li><p>等待构建完成后，复制分配的域名并拼接 URL 访问即可。</p></li></ol><h3 id="vercel-部署" tabindex="-1">Vercel 部署 <a class="header-anchor" href="#vercel-部署" aria-label="Permalink to &quot;Vercel 部署&quot;">​</a></h3><p><strong>注意：Vercel 免费账户的请求响应超时时间为 10 秒，但接口响应通常较久，可能会遇到 Vercel 返回的 504 超时错误！</strong></p><p>请先确保安装了 Node.js 环境。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vercel</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--registry</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">http://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#FFCB6B;">vercel</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">login</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/LLM-Red-Team/metaso-free-api</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"><span style="color:#FFCB6B;">vercel</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--prod</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="原生部署" tabindex="-1">原生部署 <a class="header-anchor" href="#原生部署" aria-label="Permalink to &quot;原生部署&quot;">​</a></h2><p>请准备一台具有公网 IP 的服务器并将 8000 端口开放。</p><p>请先安装好 Node.js 环境并且配置好环境变量，确认 node 命令可用。</p><p>安装依赖</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装 PM2 进行进程守护</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pm2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>编译构建，看到 dist 目录就是构建完成</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dist/index.js</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">metaso-free-api</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看服务实时日志</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">logs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>停止服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">metaso-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="推荐使用客户端" tabindex="-1">推荐使用客户端 <a class="header-anchor" href="#推荐使用客户端" aria-label="Permalink to &quot;推荐使用客户端&quot;">​</a></h2><p>使用以下二次开发客户端接入 free-api 系列项目更快更简单，支持文档/图像上传！</p><p>由 <a href="https://github.com/Yanyutin753/lobe-chat" target="_blank" rel="noreferrer">Clivia</a> 二次开发的 LobeChat <a href="https://github.com/Yanyutin753/lobe-chat" target="_blank" rel="noreferrer">https://github.com/Yanyutin753/lobe-chat</a></p><p>由 <a href="https://github.com/SuYxh" target="_blank" rel="noreferrer">时光@</a> 二次开发的 ChatGPT Web <a href="https://github.com/SuYxh/chatgpt-web-sea" target="_blank" rel="noreferrer">https://github.com/SuYxh/chatgpt-web-sea</a></p><h2 id="接口列表" tabindex="-1">接口列表 <a class="header-anchor" href="#接口列表" aria-label="Permalink to &quot;接口列表&quot;">​</a></h2><p>目前支持与 openai 兼容的 <code>/v1/chat/completions</code> 接口，可自行使用与 openai 或其他兼容的客户端接入接口，或者使用 <a href="https://dify.ai/" target="_blank" rel="noreferrer">dify</a> 等线上服务接入使用。</p><h3 id="对话补全" tabindex="-1">对话补全 <a class="header-anchor" href="#对话补全" aria-label="Permalink to &quot;对话补全&quot;">​</a></h3><p>对话补全接口，与 openai 的 <a href="https://platform.openai.com/docs/guides/text-generation/chat-completions-api" target="_blank" rel="noreferrer">chat-completions-api</a> 兼容。</p><p><strong>POST /v1/chat/completions</strong></p><p>header 需要设置 Authorization 头部：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Authorization: Bearer [token]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>请求数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 全网model名称支持 -&gt; 简洁：concise / 深入：detail / 研究：research</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 学术model名称支持 -&gt; 学术-简洁：concise-scholar / 学术-深入：detail-scholar / 学术-研究：research-scholar</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// model乱填的话，可以通过tempature参数来控制（但不支持学术）：简洁：&lt; 0.4 / 深入：&gt;= 0.4 &amp;&amp; &lt; 0.7 / 研究：&gt;= 0.7</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// model乱填的话，还可以通过消息内容包含指令来控制：↓↓↓</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 简洁 -&gt; 简洁搜索小米su7 / 深入 -&gt; 深入搜索小米su7 / 研究 -&gt; 研究搜索小米su7</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 学术-简洁 -&gt; 学术简洁搜索：小米su7 / 学术-深入 -&gt; 学术深入搜索小米su7 / 学术研究 -&gt; 学术研究搜索小米su7</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 优先级：model &gt; 消息内容指令 &gt; tempature</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">concise</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">messages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">秘塔AI</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">// 如果使用SSE流请设置为true，默认false</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">stream</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>响应数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8466827997659213824</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">concise</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chat.completion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">choices</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assistant</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">秘塔AI搜索是上海秘塔网络科技有限公司在2024年初推出的一款新产品，被誉为中国版Perplexity。它利用自研的大模型MetaLLM，能够直接对用户的提问进行理解和回答，提供结构化、准确、直接的搜索结果，并明确列出来源参考，无需科学上网，解决了语言理解上的误差[[1]]。秘塔AI搜索通过其强大的语义理解能力和全网搜索功能，为用户提供了一个高效、无广告、信息丰富的搜索体验[[2]]。此外，秘塔AI搜索的特点包括没有广告，直达结果；结构化信息展示；以及信息来源追溯，为每条搜索结果提供了来源链接，用户可以轻松溯源验证信息的出处和可靠性[[4]]。秘塔科技成立于2018年4月，是一家新锐科技公司，致力于运用AI技术赋能专业场景，进行技术研发与产品落地[[3]]。</span><span style="color:#BABED8;">\\n</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">finish_reason</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stop</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">usage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">prompt_tokens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">completion_tokens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">total_tokens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">created</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1712859314</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="token-存活检测" tabindex="-1">token 存活检测 <a class="header-anchor" href="#token-存活检测" aria-label="Permalink to &quot;token 存活检测&quot;">​</a></h3><p>检测 token 是否存活，如果存活 live 未 true，否则为 false，请不要频繁（小于 10 分钟）调用此接口。</p><p><strong>POST /token/check</strong></p><p>请求数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">65e91a6b2bac5b600dd8526a-5e7acc465b114236a8d9de26c9f41846</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>响应数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">live</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><h3 id="nginx-反代优化" tabindex="-1">Nginx 反代优化 <a class="header-anchor" href="#nginx-反代优化" aria-label="Permalink to &quot;Nginx 反代优化&quot;">​</a></h3><p>如果您正在使用 Nginx 反向代理 metaso-free-api，请添加以下配置项优化流的输出效果，优化体验感。</p><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 关闭代理缓冲。当设置为off时，Nginx会立即将客户端请求发送到后端服务器，并立即将从后端服务器接收到的响应发送回客户端。</span></span>
<span class="line"><span style="color:#89DDFF;">proxy_buffering </span><span style="color:#BABED8;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启用分块传输编码。分块传输编码允许服务器为动态生成的内容分块发送数据，而不需要预先知道内容的大小。</span></span>
<span class="line"><span style="color:#89DDFF;">chunked_transfer_encoding </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开启TCP_NOPUSH，这告诉Nginx在数据包发送到客户端之前，尽可能地发送数据。这通常在sendfile使用时配合使用，可以提高网络效率。</span></span>
<span class="line"><span style="color:#89DDFF;">tcp_nopush </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开启TCP_NODELAY，这告诉Nginx不延迟发送数据，立即发送小数据包。在某些情况下，这可以减少网络的延迟。</span></span>
<span class="line"><span style="color:#89DDFF;">tcp_nodelay </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置保持连接的超时时间，这里设置为120秒。如果在这段时间内，客户端和服务器之间没有进一步的通信，连接将被关闭。</span></span>
<span class="line"><span style="color:#89DDFF;">keepalive_timeout </span><span style="color:#BABED8;">120</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="token-统计" tabindex="-1">Token 统计 <a class="header-anchor" href="#token-统计" aria-label="Permalink to &quot;Token 统计&quot;">​</a></h3><p>由于推理侧不在 metaso-free-api，因此 token 不可统计，将以固定数字返回。</p><h2 id="star-history" tabindex="-1">Star History <a class="header-anchor" href="#star-history" aria-label="Permalink to &quot;Star History&quot;">​</a></h2><p><a href="https://star-history.com/#LLM-Red-Team/metaso-free-api&amp;Date" target="_blank" rel="noreferrer"><img src="https://api.star-history.com/svg?repos=LLM-Red-Team/metaso-free-api&amp;type=Date" alt="Star History Chart"></a></p>`,98),u=[D,y,d];function F(b,h,m,B,E,g){return n(),l("div",null,u)}const f=a(i,[["render",F]]);export{C as __pageData,f as default};
