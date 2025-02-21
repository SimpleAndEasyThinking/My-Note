
# 微服务基础

当需要拆分服务时，会产生很多原本单体应用没有的问题。

* 运维成本的增加
* 接口的统一
* 分布式的复杂性，拆分后各个微服务独立的运行在不同的进程中。
尽管存在以上问题但微服务仍然是当下优选。

在经过多年的发展，架构师提炼了微服务的九大特性，

* **服务组件化**，将服务拆分为各个组件使用http等通信协议链接，避免了整体修改发布等部署问题。
* **根据业务划分团队**，拆分后的服务可以按照各种业务进行团体的组织架构的划分，比如DBA团队、运维团队、后端团队、前端团队、设计师团队等，将责任下发到每个小团队，缺陷就是需要频繁跨团队处理问题。
* **强化团队对产品的感知**，每个小团队需要对负责产品的整个生命周期，强化了人员对产品的掌控。
* **智能端点与哑管道**，由于服务不在同进程，需要特殊的沟通方式，
  * 第一种，使用HTTP的RESTfulAPI或轻量级的消息发送协议，实现信息传递与服务调用的触发。
  * 第二种，通过在轻量级消息总线上传递消息，类似 RabbitMQ 等一些提供可靠异步交换的中间件。
* **去中心化治理**，忽悠技术平台的制约，每个组件可以采用不同的技术平台处理业务。
* **去中心化管理数据**，让每个服务来管理各自的数据库，将原数据拆分到不同的数据库中，还可以采用一些特殊结构的数据库（存储日志信息的MongoDB、存放用户登录信息的Redis）。**数据一致性**是其最大的阻碍，在微服务种我们更强调各服务采用“无事务”调用，只要求最后的处理状态一致。如果出错，可通过补偿来进行处理。
* **基础设施自动化**，拆分后的服务体积头变小，但数量增加。所以需要构建“持续交付”平台来支撑整个实施过程。
  * **自动化测试**，每次部署前的强心剂，尽可能地获得对正在运行的软件的信心。
  * **自动化部署**，解放烦琐枯燥的重复操作以及对多环境的配置管理。
* **容错设计**，当单个组件出现故障，其他组件仍然可以正常运行。但还需要处理故障的蔓延。对各个组件的监控是必不可少的。
* **演进式设计**，在没有足够经验的团队中，微服务比单体应用成本更高，可以通过从单体应用到微服务的转变，以适应未来复杂的业务。

# SpringCloud

现存的微服务框架甚多，且不同。每个框架的特性和方向都不同，SpringCloud则是一个解决微服务架构实施的综合性解决框架，它具备许多通用特性，比较适合初步进入微服务。

## 简介

Spring Cloud是基于SpringBoot实现的架构。它具备配置管理、服务治理、断路器、智能路由、微代理、控制总线、全局锁、决策竞选、分布式会话和集群状态管理等操作。
其中还有多个子项目：

* **Spring Cloud Config**：配置管理工具， 支持Git存储配置内容，外部化存储配置信息，客服端配置信息的刷新、加密/解密配置等。
* **Spring Cloud Netflix**：核心组件，对多个Netflix OSS开源套件进行整合。
  * **Eureka**：服务治理组件，包括服务注册中心、服务注册与发现机制的实现。
  * **Hystrix**：容错管理组件，实现断路器模式，帮助服务依赖中出现的延迟和故障提供容错。
  * **Ribbon**：客户端负载均衡的服务调用组件。
  * **Feign**：基于Ribbon和Hystrix的声明式服务调用组件
  * **Zuul**：网关组件，提供智能路由、访问过滤等功能。
  * **Archaius**：外部化配置组件。
* **Spring Cloud Bus**：事件、消息总线，用于传播集群中的状态变化或事件，以触发后续的处理，比如用来动态刷新配置等。
* Spring Cloud Cluster ：针对 ZooKeeper、Redis、Hazelcast、Consul的选举算法和通用状态模式的实现。
* Spring Cloud Cloudfoundry：与Pivotal Cloudfoundry的整合支持。
* Spring Cloud Consul：服务发现与配置管理工具。
* **Spring Cloud Stream**：通过Redis、Rabbit或者Kafka实现的消费微服务，可以通过简单的声明式模型来发送和接收消息。
* Spring Cloud AWS：用于简化整合Amazon Web Service的组件。
* Spring Cloud Security：安全工具包，提供在Zuul代理中对OAuth2客户端请求的中继器。
* **Spring Cloud Sleuth**:Spring Cloud应用的分布式跟踪实现，可以完美整合Zipkin。
* Spring Cloud ZooKeeper：基于ZooKeeper的服务发现与配置管理组件。
* Spring Cloud Starters:Spring Cloud的基础组件，它是基于SpringBoot风格项目的基础依赖模块。
* Spring Cloud CLI：用于在Groovy中快速创建Spring Cloud应用的Spring Boot CLI插件。

#  Spring Cloud Netflix

Netflix是核心组件

## Spring Cloud Eureka

它基于Netflix Eureka 做了二次封装，主要负责完成微服务架构中的服务治理功能，我们只需通过简单引入依赖和注解配置就能让Spring Boot构建的微服务应用轻松地与Eureka服务治理体系进行整合。

### 服务治理

主要用来实现各个微服务实例的自动化注册与发现，微服务应用也不断增加，我们的静态配置就会变得越来越难以维护。围绕着服务注册与服务发现机制来完成对微服务应用实例的自动化管理。

* 服务注册：在服务治理框架中，通常都会构建一个注册中心，每个服务单元向注册中心登记自己提供的服务，将主机与端口号、版本号、通信协议等一些附加信息告知注册中心，注册中心按服务名分类组织服务清单。服务注册中心还需要以心跳的方式去监测清单中的服务是否可用，若不可用需要从服务清单中剔除，达到排除故障服务的效果。
* 服务发现：在该框架下，无需实例地址，可通过服务名发起请求调用。透明化请求过程。

#### Netflix Eureka

Spring Cloud Eureka，使用Netflix Eureka来实现服务注册与发现，它既包含了服务端组件，也包含了客户端组件，并且服务端与客户端均采用Java编写，所以Eureka主要适用于通过Java实现的分布式系统，或是与JVM兼容语言构建的系统。
由于Eureka服务端的服务治理机制提供了完备的RESTful API，所以它也支持将**非Java语言构建**的微服务应用纳入Eureka的服务治理体系中来。但需要Eureka的客户端程序
Eureka服务端（注册中心），

* 支持高可用配置
* 应对多种不同的故障场景，
* 集群模式部署时，分片故障期间继续提供服务的发现和注册，已经后续的恢复。
* 每个可用的区域运行一个Eureka服务端，通过它来形成集群，在Eureka的服务治理设计中，所有节点即是服务提供方，也是服务消费方
* 不同可用区域的服务注册中心通过异步模式互相复制各自的状态
Eureka客户端（处理服务的注册与发现）

#### 搭建服务注册中心

创建注册中心所需的依赖

* spring-cloud-starter-eureka-server
* spring-boot-starter-parent
* spring-cloud-dependencies

启动类注解@EnableEurekaServer开启此功能

```yml
server.port=1111 #端口
eureka.instance.hostname=localhost # 主机
eureka.client.register-with-eureka=false #注册中心是否注册自己，集群部署时为true
eureka.client.fetch-registry=false #是否启用检索服务，集群部署时为true
eureka.client.serviceUrl.defaultZone=http://${eureka.instance.hostna me}:${serve r.port}/eureka/ # 注册中心网址
```

注册中心搭建完毕后还需要服务的提供方。将Spring Boot应用加入Eureka的服务治理体系中去
实现依赖有

* spring-boot-starter-web
* spring-boot-starter-test
* spring-cloud-starter-eureka
* spring-cloud-dependencies

```java
@Autowired
private DiscoveryClient client;
//DiscoveryClient对象打印了该服务的注册信息
 ```

启动类注解@EnableDiscoveryClient激活Eureka 中的DiscoveryClient实现

```yml
spring.application.name=hello-service
eureka.client.serviceUrl.defaultZone=http://localhost:1111/eureka #注册服务
```

双节点部署注册中心，将对方当作自己的注册中心实现两点的交叉注册

```yml
spring.application.name=eureka-server
server.port=1111
eureka.instance.hostname=peer1
eureka.client.serviceUrl.defaultZone=http://peer2:1112/eureka/
```

```yml
spring.application.name=eureka-server
server.port=1112
eureka.instance.hostname=peer2
eureka.client.serviceUrl.defaultZone=http://peer1:1111/eureka/
```

#### 服务发现和消费

除了服务注册中心和服务提供者，还需要服务的消费者对服务调用，它主要完成两个目标，发现服务以及消费服务。

* 服务发现的任务由Eureka的客户端完成
* 服务消费的任务由Ribbon完成

**Ribbon**是一个基于HTTP和TCP的客户端负载均衡器，它可以在通过客户端中配置的ribbonServerList服务端列表去轮询访问以达到均衡负载的作用

> 当 Ribbon 与 Eureka 联合使用时，Ribbon 的 服 务 实 例 清 单 RibbonServerList 会 被DiscoveryEnabledNIWSServerList 重写，扩展成从 Eureka 注册中心中获取服务端列表。同时它也会用 NIWSDiscoveryPing来取代 IPing，它将职责委托给 Eureka 来确定服务端是否已经启动。

### Eureka解析

Eureka服务治理体系中的三个核心角色：服务注册中心、服务提供者以及服务消费者。

* 服务注册中心：Eureka提供的服务端，提供服务注册和发现。
* 服务提供者：提供服务的应用，SpringBoot应用、其他遵循Eureka通信的应用。
* 服务消费者：消费者从注册中心获取服务列表，消费服务。Ribbon、Feign等
有点时候消费者也可以是提供者

#### 服务提供者

**服务注册**
“服务提供者”在启动的时候会通过发送REST请求的方式将自己注册到Eureka Server上，同时带上了自身服务的一些元数据信息（存储方式Map<服务名，实例名>）。
检查 eureka.client.register-with-eureka=true；
**服务同步**
由于服务注册中心之间互相注册，当服务提供者发送注册请求到一个服务注册中心时，它会将该请求**转发**给集群中相连的其他注册中心，从而实现注册中心之间的服务同步。
**服务续约**
服务提供者使用心跳策略，以防止 Eureka Server 的“剔除任务”将该服务实例从服务列表中排除出去。

```yml
eureka.instance.lease-renewal-interval-in-seconds=30 #服务续约任务调用间隔时间
eureka.instance.lease-expiration-duration-in-seconds=90 #服务失效的时间
```

#### 服务消费者

**获取服务**
发送REST请求给服务注册中心，获取服务清单。（Eureka Server会维护一份只读的服务清单来返回给客户端，同时该缓存清单会每隔30秒更新一次）
**服务调用**
获取到清单后，调用到具体服务的实例名和元数据。
在Ribbon中会默认采用轮询的方式进行调用，从而实现客户端的负载均衡。
> 对于访问实例的选择，Eureka中有Region和Zone的概念，一个Region中可以包含多个Zone，每个服务客户端需要被注册到一个Zone中，所以每个客户端对应一个Region和一个Zone。在进行服务调用的时候，优先访问同处一个Zone中的服务提供方，若访问不到，就访问其他的Zone
**服务下线**
当服务实例进行正常的关闭操作时，它会触发一个服务下线的REST请求给Eureka Server，告诉服务注册中心：“我要下线了”。服务端在接收到请求之后，将该服务状态置为下线（DOWN），并把该下线事件传播出去。

#### 服务注册中心

**失效剔除**
存在异常服务且没有收到服务下线请求时，Eureka Server会剔除其服务，没间隔60秒将清楚超过90秒没有续约的服务。

**自我保护**
服务注册中心出现`EMERGENCY! EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY'RE NOT.RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEING EXPIRED JUST TO BE SAFE`红色警报.
Eureka Server在运行期间，会统计心跳失败的比例在15分钟之内低于85%时，会保护当前实例注册信息，防止过期。在这段时间中客户端会拿到不存在的服务，导致调用失败，所以客户端必须有容错机制，比如请求重试、断路由等。
本地调用时不准确，可以eureka.server.enableself-preservation=false参数来关闭

## Spring Cloud Ribbon

基于HTTP和TCP的客户端负载均衡工具，它基于Netfilx Ribbon实现。通过Spring Cloud的封装，可以让我们轻松地将面向服务的REST模板请求自动转换成客户端负载均衡的服务调用。
> Ribbon存在于SpringCloud构建的微服务和基础设施中，因为微服务间的调用,API网关的请求转发等内容，都是通过Ribbon来实现的。

### 客户端负载均衡

负载均衡是对系统的高可用、网络压力的缓解和处理能力扩容的重要手段之一。

客户端负载均衡和服务端负载均衡最大的不同点在于上面所提到的服务清单所存储的位置。在客户端负载均衡中，所有客户端节点都维护着自己要访问的服务端清单，而这些服务端的清单来自于服务注册中心，同服务端负载均衡的架构类似，在客户端负载均衡中也需要心跳去维护服务端清单的健康性，只是这个步骤需要与服务注册中心配合完成。
负载均衡调用只需要如下两步：

* 服务提供者需要启动多个服务实例并注册到注册中心或是多个相关联的服务注册中心。
* 服务消费者直接通过调用被@LoadBalaced注解修饰过的RestTemplate来实现面向服务的接口调用。
  
### RestTemplate详解

RestTemplate对象会使用Ribbon的自动化配置。

#### GET请求

在RestTemplate中，调用该方法的方式有：

##### getForEntity

* getForEntity函数。该方法返回的是ResponseEntity。
  * ResponseEntity对象是Spring对HTTP请求响应的封装，其中主要存储了HTTP的几个重要元素

```java
RestTemplate restTemplate=new RestTemplate();
 ResponseEntity<String> responseEntity=restTemplate.getForEntity;("http://USER-SERVICE/user?name={l}",String.class,"didi");
 //参数didi会替换url中的{1}占位符
 //返回的ResponseEntity对象中的body内容类型会根据第二个参数转换为String类型
 String body=responseEntity.getBody();
```

将第二个参数变为User，其返回结果body就会转换为User

```java
RestTemplate restTemplate=new RestTemplate();
ResponseEntity<User> responseEntity=restTemplate.getForEntity
("http://USER-SERVICE/user? name={1}",User.class,"didi");
User body=responseEntity.getBody();
```

* `getForEntity(String url,Class responseType,Object...urlVariables)`
  * 该方法提供了三个参数，其中 url为请求的地址，responseType 为请求响应体body的包装类型，urlVariables为url中的参数绑定,由于urlVariables 参数是一个数组，所以它的顺序会对应 url 中占位符定义的数字顺序
* `getForEntity(String url,Class responseType,Map urlVariables)`
  * 只有 urlVariables 的参数类型与上面的方法不同,变成了键值对。

```java
RestTemplate restTemplate=new RestTemplate（）;
 Map<String,String> params=new HashMap<>（）;
 params.put（"name","dada"）;
ResponseEntity<String> responseEntity=restTemplate.getForEntity("http://USER-SERVICE/user?name={name}",String.class,params);
```

* `getForEntity(URI url,Class responseType)`
  * URI对象来替代之前的url和urlVariables参数来指定访问地址和参数绑定

```java
RestTemplate restTemplate=new RestTemplate（）;
UriComponents uriComponents=UriComponentsBuilder.fromUriString(
"http://USER-SERVICE/user? name={name}")
.build()
.expand("dodo")
.encode();
//构建一个URL对象
 URL url=uriComponents.toUrL();
 ResponseEntity<String> responseEntity=restTemplate.getForEntity
(url,String.class).getBody()
```

##### getForObject函数

该方法可以理解为对getForEntity的进一步封装，它通过HttpMessageConverterExtractor对HTTP的请求响应体body内容进行对象转换，实现请求直接返回包装好的对象内容。

```java
RestTemplate restTemplate=new RestTemplate（）;
 String result=restTemplate.getForObject（url,String.class）;
//当body是一个User对象时，可以直接这样实现：
RestTemplate restTemplate=new RestTemplate（）;
 User result=restTemplate.getForObject（url,User.class）;
```

当不需要关注请求响应除 body 外的其他内容时，该函数就非常好用，可以少一个从Response中获取body的步骤。

* `getForObject(String url,Class responseType,Object...urlVariables)`
  * url参数指定访问的地址，responseType参数定义该方法的返回类型，urlVariables参数为url中占位符对应的参数。
* `getForObject(String url,Class responseType,Map urlVariables)`
  * 在该函数中，使用Map类型的urlVariables替代上面数组形式的urlVariables，因此使用时在url中需要将占位符的名称与Map类型中的key一一对应设置
* `getForObject(URI url,Class responseType)`
  * 该方法使用 URI 对象来替代之前的url和urlVariables参数使用

#### Post请求

post请求有三个方法调用实现

##### PostForEntity函数

该方法同GET请求中的getForEntity类似，会在调用后返回`ResponseEntity<T>`对象，其中T为请求响应的body类型。

```java
RestTemplate restTemplate=new RestTemplate();
 User user=new User("didi",30);
 ResponseEntity<String> responseEntity=("http://USERrestTemplate.postForEntitySERVICE/user",user,String.class);
 //使用postForEntity提交POST请求到USERSERVICE服务的/user接口，提交的body内容为user对象，请求响应返回的body类型为String。
 String body=responseEntity.getBody();
```

* `postForEntity(String url,Object request,String responseType,Object...uriVariables)`
* `postForEntity( String url,Object request,Class responseType,Map uriVariables)`
* `postForEntity(URI url,Object request,Class responseType)`
 **uriVariables** 参数都用来对 url 中的参数进行绑定使用； **responseType** 参数是对请求响应的body内容的类型定义，**request**参数可以为普通对象也可以为HttpEntity对象。

 > 如果是一个普通对象，而非HttpEntity 对象的时候，RestTemplate会将请求对象转换为一个HttpEntity对象来处理，其中Object就是request的类型，request内容会被视作完整的body来处理；而如果request是一个HttpEntity对象，那么就会被当作一个完成的http 请求对象来处理，这个 request 中不仅包含了body 的内容，也包含了header的内容。

##### postForObjec函数

 ```java
 RestTemplate restTemplate=new RestTemplate();
 User user=new User("didi",20);
 String postResult=restTemplate.postForObject("http://USERSERVICE/ser",user,String.class);
```

* `postForObject(String url,Object request,Class responseType,Object...urlVariables)`
* `postForObject (String url,Object request,Class responseType,Map uriVariables)`
* `postForObject(URI url,Object request,Class responseType)`
返回的对象类型不同，函数的传入参数均与**postForEntity**一致

##### postForEntity函数

```java
User user=new User("didi",40);
URL responseURI=restTemplate.postForLocation ("http://USERSERVICE/ser",user)
```

* `postForLocation(String url,Object request,Object...urlVariables）`
* `postForLocation(String url,Object request,Map urlVariables）`
* `postForLocation(URL url,Object request)`
由于**postForLocation**函数会返回新资源的URL，该URL就相当于指定了返回类型，所以此方法实现的POST请求不需要像**postForEntity**和**postForObject**那样指定responseType

#### PUT请求

```java
RestTemplate restTemplate=new RestTemplate();
Long id=10001L;
User user=new User("didi",40);
restTemplate.put("http://USER-SERVICE/user/{l}",user,id);
```

* `put（String url,Object request,Object...urlVariables）`
* `put（String url,Object request,Map urlVariables）`
* `put（URI url,Object request）`
put函数为**void类型**,没有返回值，也没有responseType。

#### DELETE请求

```java
RestTemplate restTemplate=new RestTemplate();
Long id=10001L;
restTemplate.delete("http://USER-SERVICE/user/{l}",id);
```

* `delete(String url,Object...urlVariables)`
* `delete(String url,Map urlVariables)`
* `delete(URI url)`
DELETE请求的唯一标识拼接在url

### 负载均衡

见Ribbon源码

### 配置

#### 自动化配置

* IClientConfig:Ribbon 的客户端配置，默认采用com.netflix.client.config.DefaultClientConfigImpl实现
* IRule:Ribbon的负载均衡策略 ，默认采用com.netflix.loadbalancer.ZoneAvoidanceRule实现，该策略能够在多区域环境下选出最佳区域的实例进行访问
* IPing:Ribbon的实例检查策略 ，默认采用com.netflix.loadbalancer.NoOpPing 实现，该检查策略是一个特殊的实现，实际上它并不会检查实例是否可用，而是始终返回true，默认认为所有服务实例都是可用的
* `ServerList<Server>` ：服务实例清单的维护机制，默认采用com.netflix.loadbalancer.ConfigurationBasedServerList实现。
* `ServerListFilter<Server>`：服务实例清单过滤机制，默认采用org.springframework.cloud.netflix.ribbon.ZonePreferenceServerLis tFilter实现，该策略能够优先过滤出与请求调用方处于同区域的服务实例。
* ILoadBalancer ：负载均衡器 ，默认采用com.netflix.loadbalancer.ZoneAwareLoadBalancer实现，它具备了区域感知的能力

想要覆盖应用，在Spring Boot应用中创建对应的实现实例就能覆盖这些默认的配置实现即可
创建了**PingUrl**实例，所以默认的**NoOpPing**就不会被创建。

```java
@Configuration
public class MyRibbonConfiguration {
  @Bean
  public IPing ribbonPing(IClientConfig config){
  return new PingUrl();
  }
}
```

通过使用@RibbonClient注解来实现更细粒度的客户端配置

```java
@Configuration
@RibbonClient(name="helloservice",configuration=HelloServiceConfiguration.class)
public class RibbonConfiguration {
}
```

#### Camden版本对RibbonClient配置的优化

以上是在Brixton版本配置，

```java
public class PropertiesFactory {
	@Autowired
	private Environment environment;

	private Map<Class, String> classToProperty = new HashMap<>();

	public PropertiesFactory() {
		classToProperty.put(ILoadBalancer.class, "NFLoadBalancerClassName");
		classToProperty.put(IPing.class, "NFLoadBalancerPingClassName");
		classToProperty.put(IRule.class, "NFLoadBalancerRuleClassName");
		classToProperty.put(ServerList.class, "NIWSServerListClassName");
		classToProperty.put(ServerListFilter.class, "NIWSServerListFilterClassName");
	}

	// 查看当前clazz是否在classToProperty管理的几个核心接口之一
	// 如是，查看Spring environment中是否能找到 “clientName.ribbon.核心接口配置项”的配置信息
	public boolean isSet(Class clazz, String name) {
		return StringUtils.hasText(getClassName(clazz, name));
	}

	public String getClassName(Class clazz, String name) {
		if (this.classToProperty.containsKey(clazz)) {
			String classNameProperty = this.classToProperty.get(clazz);
			String className = environment.getProperty(name + "." + NAMESPACE + "." + classNameProperty);
			return className;
		}
		return null;
	}

		// 也是先调用getClassName()获取Spring enviroment中配置的核心接口实现类名
		// 再使用IClientConfig配置信息创建其实例
	@SuppressWarnings("unchecked")
	public <C> C get(Class<C> clazz, IClientConfig config, String name) {
		String className = getClassName(clazz, name);
		if (StringUtils.hasText(className)) {
			try {
			Class<?> toInstantiate = Class.forName(className);
			return (C) instantiateWithConfig(toInstantiate, config);
			} catch (ClassNotFoundException e) {
			throw new IllegalArgumentException("Unknown class to load "+className+" for class " + clazz + " named " + name);
			}
		}
		return null;
	}
}
```

* NFLoadBalancerClassName ：配置ILoadBalancer接口的实现。
* NFLoadBalancerPingClassName ：配置IPing接口的实现。
* NFLoadBalancerRuleClassName ：配置IRule接口的实现。
* NIWSServerListClassName ：配置ServerList接口的实现。
* NIWSServerListFilterClassName ：配置ServerListFilter接口的实现。
所以，在Camden版本中我们可以通过配置的方式，更加方便地为RibbonClient指定ILoadBalancer、IPing、IRule、ServerList 和ServerListFilter的定制化实现。

#### 参数配置

于Ribbon的参数配置通常有两种方式：全局配置、指定客户端配置

* 全局配置的方式很简单，只需使用`ribbon.<key>=<value>`格式进行配置即可。其中，`<key>`代表了 Ribbon 客户端配置的参数名，`<value>`则代表了对应参数的值。
  * 全局配置Ribbon创建连接的超时时间：ribbon.ConnectTimeout=250
  * 全局配置可以作为默认值进行设置，当指定客户端配置了相应key的值时，将覆盖全局配置的内容。

* 指定客户端的配置方式采用`<client>.ribbon.<key>=<value>`的格式进行配置。
  * 其中，`<key>`和`<value>`的含义同全局配置相同，而`<client>`代表了客户端的名称，如上文中我们在@RibbonClient中指定的名称，也可以将它理解为是一个服务名。
  * 假设，有一个服务消费者通过RestTemplate来访问hello-service服务的/hello接口，`restTemplate.getForEntity("http://helloservice/hello",String.class.getBody());`。
  * 如果没有服务治理框架的帮助，我们需要为该客户端指定具体的实例清单，可以指定服务名来做详细的配置，具体如下：hello-service.ribbon.listOfServers=localhost:8001,localhost:8002,localhost:8003
对于Ribbon参数的key以及value类型的定义，可以通过查看com.netflix.client.config.CommonClientConfigKey类获得更为详细的配置

#### 搭配Eureka使用

Spring Cloud的应用中同时引入Spring Cloud Ribbon和Spring Cloud Eureka依赖时会触发Eureka中实现的对Ribbon的自动化配置。

* 这时 ServerList 的维护机制实现将被com.netflix.niws.loadbalancer.DiscoveryEnabledNIWSServerList 的实例所覆盖该实现会将服务清单列表交给Eureka的服务治理机制来进行维护
* IPing的实现将被 com.netflix.niws.loadbalancer.NIWSDiscoveryPing 的实例所覆盖，该实现也将实例检查的任务交给了服务治理框架来进行维护。
* 默认情况下，用于获取实例请求的ServerList接口实现将采用Spring Cloud Eureka中封装的org.springframework.cloud.netflix.ribbon.eureka.DomainExtractingServerList，其目的是为了让实例维护策略更加通用，所以将使用物理元数据来进行负载均衡，而不是使用原生的AWS AMI元数据
Eureka 将会为我们维护所有服务的实例清单，依然可以采用之前的两种配置方式来实现指定客户端的配置方式,Eureka中的服务名作为`<client>`来完成针对各个微服务的个性化配置.
eureka.instance.metadataMap.zone=shanghai 元数据中增加zone参数来指定自己所在的区域，将处于不同机房的实例配置成不同的区域值

ribbon.eureka.enabled=false可以禁用Eureka自动配置

### 重试机制

Spring Cloud整合了Spring Retry来增强RestTemplate的重试能力
配置方法：
spring.cloud.loadbalancer.retry.enabled=true
hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds=10000
hello-service.ribbon.ConnectTimeout=250
hello-service.ribbon.ReadTimeout=1000
hello-service.ribbon.OkToRetryOnAllOperations=true
hello-service.ribbon.MaxAutoRetriesNextServer=2
hello-service.ribbon.MaxAutoRetries=1

* spring.cloud.loadbalancer.retry.enabled：该参数用来开启重试机制，它默认是关闭的。这里需要注意，官方文档中的配置参数少了enabled。该参数的源码定义如下：

```java
@ConfigurationProperties（"spring.cloud.loadbalancer.retry"）
public class LoadBalancerRetryProperties {
 private boolean enabled=false;
 ...
 }
```

* hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds：断路器的超时时间需要大于 Ribbon 的超时时间，不然不会触发重试。
* hello-service.ribbon.ConnectTimeout：请求连接的超时时间。
* hello-service.ribbon.ReadTimeout：请求处理的超时时间。
* hello-service.ribbon.OkToRetryOnAllOperations：对所有操作请求都进行重试。
* hello-service.ribbon.MaxAutoRetriesNextServer：切换实例的重试次数。
* hello-service.ribbon.MaxAutoRetries：对当前实例的重试次数。

> 当访问到故障请求的时候，它会再尝试访问一次当前实例（次数由MaxAutoRetries配置），如果不行，就换一个实例进行访问，如果还是不行，再换一次实例访问（更换次数由MaxAutoRetriesNextServer配置），如果依然不行，返回失败信息。

## Spring Cloud Hystrix

系统拆分成了很多服务单元运行在不同的进程中，且相互依赖。在通信的过程中可能会调用故障或延迟，最后导致任务积压，瘫痪。
断路器模式保护机制，当故障发生时向调用方返回一个错误响应，防止调用故障服务。
Hystrix就实现了断路器、线程隔离等服务保护功能。是基于Netflix实现。该框架的目标在于通过控制那些访问远程系统、服务和第三方库的节点，从而对延迟和故障提供更强大的容错能力。

在消费者中引入依赖spring-cloud-starter-hystrix，并使用@SpringCloudApplication注释入口函数，在调用接口方法中实现@HystrixCommand（fallbackMethod="helloFallback",ommandKey="helloKey"）出现超时调用回调函数helloFallback，直接报错，避免阻塞。

### 原理分析

通过官方流程图了解一下Hystrix是如何工作的

#### 流程
