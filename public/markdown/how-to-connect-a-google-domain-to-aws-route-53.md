Google Domains is a simple way to buy and manage domains, and it's the place I personally go to buy all of my own
domains. It is a piece of cake to connect a domain purchased through Google Domains to any services
in Google Cloud Platform. However, it takes a little more work if you prefer to run your applications on AWS
infrastructure. Once you get a domain connected to Route 53 though, it is an absolute breeze to manage your domain
in AWS. In this article, I'll walk you through the steps necessary to use a Google Domain with AWS Route 53.

# Let's talk about Route 53

One of the biggest pluses of Route 53 is that it has the concept of "Hosted Zones". Put simply, hosted zones are
containers for DNS records pertaining to a certain domain name. This approach to managing DNS makes everything so
much easier for many reasons. For example, let's say that your domain currently points at a virtual machine running somewhere,
and you decide you want to change it to point to a container environment somewhere else. Using the traditional approach,
you would need to update your DNS nameservers to point at the new service, which can take hours or even days to propagate. This leads
to slowed development time as well as potential application downtime.
\
\
When you use Route 53 however, you only go through this process once, so long as you plan to stay within the AWS ecosystem. You change your
domain's nameservers to point at your Route 53 hosted zone, and Route 53 can then manage records internally to point to different
AWS services, such as Amplify, Elastic Beanstalk, or any EC2 configuration. Now, if you want to change your domain from pointing
at one AWS service to another, it's almost instantaneous, as there is no external propagation required. This is a huge time saver!

# Creating a Route 53 Hosted Zone

Let's create a Hosted Zone to get started. First, navigate to [the Route 53 hosted zones page](https://console.aws.amazon.com/route53/v2/hostedzones#) and
click the "Create hosted zone" button:
![Create hosted zone button](!!BASE_URL!!/create-hosted-zone-button.png)

Enter your domain name and leave everything else as is, and then click the "Create Hosted Zone" button. We've got our zone
set up and ready to go, so now let's figure out how to connect it!

# Using the Route 53 DNS Records

Now, let's take a look at the records stored in our hosted zone. You should, at a minimum, see a list of at least 4
"NS" records. This stands for the "Name Server" record type, and we can use it to tell our domain provider which external
service is authorized to manage our domain. You can find these under the "Value/Route traffic to" column:

![](!!BASE_URL!!/route-53-dns.png)

We can take each one of these records and use them as a custom name server record on our domain provider's page. In this example,
we are using Google Domains.

# Adding Custom Name Servers to Google Domains

Now, let's head back over to [Google Domains](https://domains.google.com/). Select your domain and navigate to the "DNS"
page:

![](!!BASE_URL!!/google-domains-dns-tab.png)

Click the "Custom name servers" tab at the top of the page, and simply enter each one of the "NS" values from Route 53 into
the text inputs on this page. Once you make these settings active in Google Domains, you should within 24 hours see that
your domain now points to Route 53! You should end up seeing a page that looks something like this:

![](!!BASE_URL!!/custom-name-servers.png)

Now, it's almost trivial to point your domain to any of the AWS compute services as needed. I hope this short article helped you understand
some benefits of using Route 53, as well as how to connect your domains to it. This is especially important if you own domains from multiple providers
outside of AWS, but want to manage their DNS all in one place. Now, you can simply set your custom name
servers on your domain provider's page and forget about them.
\
\
Thanks for reading!
